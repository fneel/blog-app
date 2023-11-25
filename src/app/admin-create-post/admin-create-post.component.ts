
import { Component } from '@angular/core';
import { BlogPost } from '../blog-post';
import { BlogPostService } from '../blog-post.service';

@Component({
  selector: 'app-admin-create-post',
  templateUrl: './admin-create-post.component.html',
  styleUrls: ['./admin-create-post.component.css'],
})
export class AdminCreatePostComponent {
  newBlogPost: BlogPost = new BlogPost(0, '', '', '', new Date(), 0, 0, []);

  createdPosts: BlogPost[] = [];

  constructor(private blogPostService: BlogPostService) {}

  public uploadBlogPost(): void {
    this.blogPostService.createBlogPost(this.newBlogPost);
    this.createdPosts.push({ ...this.newBlogPost }); 
    this.resetForm();
  }

  onFileChange(event: any): void {
    const fileInput = event.target;

    if (fileInput.files && fileInput.files.length > 0) {
      const file = fileInput.files[0];

      console.log('Uppladdad fil:', file.name);

      const imageURL = URL.createObjectURL(file);

      this.newBlogPost.thumbnailUrl = imageURL;
    }
  }

  resetForm(): void {
    this.newBlogPost = new BlogPost(0, '', '', '', new Date(), 0, 0, []);
  }
}