import { Component } from '@angular/core';
import { BlogPostService } from '../blog-post.service';
import { BlogPost } from '../blog-post.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(
    private blogPostService: BlogPostService,
  ) {}

  get posts(): BlogPost[] {
    return this.blogPostService.posts;
  }
}
