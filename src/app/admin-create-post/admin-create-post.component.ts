import { Component } from '@angular/core';
import { BlogPost } from '../blog-post'; // Uppdatera importen här
import { BlogPostService } from '../blog-post.service';

@Component({
  selector: 'app-admin-create-post',
  templateUrl: './admin-create-post.component.html',
  styleUrls: ['./admin-create-post.component.css'],
})
export class AdminCreatePostComponent {
  newBlogPost: BlogPost = new BlogPost('', '', '', new Date(), 0, 0, []);

  constructor(private blogPostService: BlogPostService) {}

  createBlogPost() {
    this.blogPostService.createBlogPost(this.newBlogPost);
    this.resetForm();
  }

  resetForm() {
    this.newBlogPost = new BlogPost('', '', '', new Date(), 0, 0, []);
  }
}
