import { Component } from '@angular/core';
import { BlogPost } from '../blog-post.model';
import { BlogPostService } from '../blog-post.service';

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

  constructor(private blogPostService: BlogPostService) {}

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
}
