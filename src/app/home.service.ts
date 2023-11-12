// home.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BlogPost } from './blog-post.model';


@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private blogPosts: BlogPost[] = [];

  constructor() {
    // Initial data (replace with your logic)
    this.blogPosts = [
      // ... sample blog posts ...
    ];
  }

  public getAllBlogPosts(): Observable<BlogPost[]> {
    return of(this.blogPosts);
  }
}
