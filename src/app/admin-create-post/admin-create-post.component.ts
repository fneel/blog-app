import { Component } from '@angular/core';
import { BlogPost } from '../blog-post.model';
import { BlogPostService } from '../blog-post.service';
// Importera HttpClient i din komponent (t.ex. admin-create-post.component.ts)
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

  // Injicera HttpClient i konstruktorn
  constructor(
    private blogPostService: BlogPostService,
    private http: HttpClient
  ) {
    // Hämta tidigare uppladdade bilder vid komponentinitialisering
    this.getUploadedImages();
  }

  createBlogPost() {
    this.blogPostService.createBlogPost(this.newBlogPost);
    this.newBlogPost = {
      title: '',
      thumbnailURL: '',
      body: '',
      creationDate: new Date(),
      likes: 0,
      dislikes: 0,
      comments: [],
    };
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
}
