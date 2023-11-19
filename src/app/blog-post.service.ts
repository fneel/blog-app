import { Injectable } from '@angular/core';
import { BlogPost } from './blog-post';
import { Comment } from './comment';

@Injectable({
  providedIn: 'root',
})
export class BlogPostService {
  public blogPosts: BlogPost[] = this.loadLocalData();
  public newBlogPost: BlogPost = new BlogPost('title', 'body', 'thumbnailUrl', new Date(), 0, 0, []);

  constructor() {}

  private loadLocalData(): BlogPost[] {
    const getItem = localStorage.getItem('blogPosts');
    return getItem ? JSON.parse(getItem) : [];
  }

  public savePostsToLocalStorage(): void {
    localStorage.setItem('blogPosts', JSON.stringify(this.blogPosts));
  }

  public createBlogPost(post: BlogPost): void {
    this.blogPosts.push(post);
    this.savePostsToLocalStorage();
  }

  public getPosts(): BlogPost[] {
    return this.blogPosts;
  }

  // Add other methods as needed
}
