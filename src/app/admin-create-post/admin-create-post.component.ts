import { Component } from '@angular/core';
import { BlogPost } from '../blog-post.model';
import { BlogPostService } from '../blog-post.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-create-post',
  templateUrl: './admin-create-post.component.html',
  styleUrls: ['./admin-create-post.component.css'],
})
export class AdminCreatePostComponent {
  newBlogPost: BlogPost = {
    title: '',
    thumbnailURL: '',
    body: '',
    creationDate: new Date(),
    likes: 0,
    dislikes: 0,
    comments: [],
  };

  // Lägg till en array för att hålla listan över uppladdade bilder
  uploadedImages: string[] = [];

  selectedFile: File | null = null;

  // Injicera HttpClient i konstruktorn
  constructor(
    private blogPostService: BlogPostService,
    private http: HttpClient
  ) {
    // Hämta tidigare uppladdade bilder vid komponentinitialisering
    this.getUploadedImages();
  }

  createBlogPost() {
    if (this.selectedFile) {
      // Log the entire blog post object
      console.log('Blog Post:', this.newBlogPost);
      this.blogPostService
        .createBlogPost(this.newBlogPost, this.selectedFile)
        .subscribe(() => {
          this.resetForm();
        });
    } else {
      console.error('Please select a file before creating a post.');
    }
  }

  onFileChange(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  // Lägg till en funktion för att hämta tidigare uppladdade bilder från servern
  getUploadedImages() {
    this.http
      .get<any>('http://localhost:4000/uploads')
      .subscribe((response) => {
        if (response.success) {
          this.uploadedImages = response.files;
        } else {
          console.error('Error fetching uploaded images:', response.error);
        }
      });
  }

  resetForm() {
    this.newBlogPost = {
      title: '',
      thumbnailURL: '',
      body: '',
      creationDate: new Date(),
      likes: 0,
      dislikes: 0,
      comments: [],
    };
    this.selectedFile = null;
  }
}
