import { Injectable } from '@angular/core';
import { BlogPost } from './blog-post';
import { Comment } from './comment';

@Injectable({
  providedIn: 'root',
})
export class BlogPostService {
  public blogPosts: BlogPost[] = this.loadLocalData();
  // public newBlogPost = new BlogPost(
  //   -1,
  //   'title',
  //   'body',
  //   'thumbnailUrl',
  //   new Date(),
  //   0,
  //   0,
  //   []
  // );

  constructor() {}

  private loadLocalData(): BlogPost[] {
    const getItem = localStorage.getItem('blogPosts');
    return getItem ? JSON.parse(getItem) : [];
  }

  public savePostsToLocalStorage(): void {
    localStorage.setItem('blogPosts', JSON.stringify(this.blogPosts));
  }

  public createBlogPost(post: BlogPost): void {
    post.id = this.generateUniqueId();
    this.blogPosts.push(post);
    this.savePostsToLocalStorage();
  }

  private generateUniqueId(): number {
    // Generera ett unikt ID baserat på timestamp
    return Date.now();
  }

  public getPosts(): BlogPost[] {
    return this.blogPosts;
  }

  // Add other methods as needed
}
