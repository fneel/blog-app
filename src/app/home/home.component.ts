import { Component, OnInit } from '@angular/core';
import { BlogPostService } from '../blog-post.service';
import { BlogPost } from '../blog-post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {

  constructor(private blogPostService: BlogPostService) {}

get blogPosts(): BlogPost[] {
  return this.blogPostService.blogPosts;
}




}
