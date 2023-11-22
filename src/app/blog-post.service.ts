// blog-app\src\app\blog-post.service.ts

import { Injectable } from '@angular/core';
import { BlogPost } from './blog-post';
import { Comment } from './comment';

@Injectable({
  providedIn: 'root',
})
export class BlogPostService {
  public blogPosts: BlogPost[] = this.loadLocalData();
  // Remove newBlogPost property from the service

  constructor() {}

  private loadLocalData(): BlogPost[] {
    const getItem = localStorage.getItem('blogPosts');
    return getItem ? JSON.parse(getItem) : [];
  }

  public savePostsToLocalStorage(): void {
    localStorage.setItem('blogPosts', JSON.stringify(this.blogPosts));
  }

  public getPosts(): BlogPost[] {
    return this.blogPosts;
  }

  private generateUniqueId(): number {
    // Generera ett unikt ID baserat på timestamp
    return Date.now();
  }

  public createBlogPost(post: BlogPost): void {
    post.id = this.generateUniqueId();
    this.blogPosts.push(post);

    localStorage.setItem('blogPosts', JSON.stringify(this.blogPosts));
  }
}
