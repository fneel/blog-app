// blog-app\src\app\admin-create-post\admin-create-post.component.ts

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
    this.createdPosts.push({ ...this.newBlogPost }); // Create a copy of the newBlogPost
    this.resetForm();
  }

  onFileChange(event: any): void {
    const fileInput = event.target;

    if (fileInput.files && fileInput.files.length > 0) {
      const file = fileInput.files[0];

      // Logga filnamnet
      console.log('Uppladdad fil:', file.name);

      // Skapa en URL för att representera bilden
      const imageURL = URL.createObjectURL(file);

      // Spara URL:en i newBlogPost.thumbnailURL
      this.newBlogPost.thumbnailUrl = imageURL;
    }
  }

  resetForm(): void {
    this.newBlogPost = new BlogPost(0, '', '', '', new Date(), 0, 0, []);
  }
}