// blog-post.component.ts
import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../blog-post.model';
import { BlogPostService } from '../blog-post.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css'],
})
export class BlogPostComponent implements OnInit {
  blogPosts: BlogPost[] = [];

  constructor(private blogPostService: BlogPostService) {}

  ngOnInit(): void {
    this.getBlogPosts();
  }

  getBlogPosts() {
    this.blogPostService.getAllBlogPosts().subscribe((posts) => {
      this.blogPosts = posts;
    });
  }
}
