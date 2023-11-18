import { Component } from '@angular/core';
import { BlogPost } from '../blog-post'; // Uppdatera importen här
import { BlogPostService } from '../blog-post.service';

@Component({
  selector: 'app-admin-create-post',
  templateUrl: './admin-create-post.component.html',
  styleUrls: ['./admin-create-post.component.css'],
})
export class AdminCreatePostComponent {
  title: string = '';
  blogPost = new BlogPost('', '', '', new Date(), 0, 0, []);
  createdPosts: BlogPost[] = [];
  

  constructor(private blogPostService: BlogPostService) {}

  createBlogPost() {
    const blogposts: BlogPost[] = this.blogPostService.blogPosts;
    blogposts.push(this.blogPost);
    this.blogPostService.createBlogPost = this.createBlogPost;

    this.blogPost = {
      title: '',
      thumbnailUrl: '',
      body: '',
      creationDate: new Date(),
      likes: 0,
      dislikes: 0,
      comments: [],
    };

    // this.blogPostService.createBlogPost(this.newBlogPost);
    // Lägg till det skapade inlägget i listan
    // this.createdPosts.push(this.newBlogPost);
    this.resetForm();
  }

  resetForm() {
    this.blogPost = new BlogPost('', '', '', new Date(), 0, 0, []);
  }


}
