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
  createdPosts: BlogPost[] = [];

  constructor(private blogPostService: BlogPostService) {}

  createBlogPost() {
    this.blogPostService.createBlogPost(this.newBlogPost);
    this.createdPosts.push(this.newBlogPost);
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

  resetForm() {
    this.newBlogPost = new BlogPost('', '', '', new Date(), 0, 0, []);
  }
}
