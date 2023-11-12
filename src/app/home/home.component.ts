// home.component.ts
import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { BlogPost } from '../blog-post.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  blogPosts: BlogPost[] = [];

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.getBlogPosts();
  }

  getBlogPosts() {
    this.homeService.getAllBlogPosts().subscribe((posts) => {
      this.blogPosts = posts;
    });
  }
}
