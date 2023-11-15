import { Injectable } from '@angular/core';
import { BlogPost } from './blog-post.model';

@Injectable({
  providedIn: 'root',
})
export class BlogPostService {
  private blogPosts: BlogPost[] = [];

  constructor() {
    this.blogPosts = this.loadLocalData();
  }

  private loadLocalData(): BlogPost[] {
    let posts = localStorage.getItem('posts');
    return !posts ? [] : JSON.parse(posts);
  }

  public get posts(): BlogPost[] {
    return this.blogPosts;
  }

  public createBlogPost(post: BlogPost): void {
    this.blogPosts.push(post);
    this.savePostsToLocalStorage();
  }

  public savePostsToLocalStorage() {
    localStorage.setItem('blogPosts', JSON.stringify(this.blogPosts));
  }
}



// export class BlogPostService {
//   private blogPosts: BlogPost[] = [];

//   constructor() {
//     const storedPosts = localStorage.getItem('blogPosts');
//     if (storedPosts) {
//       this.blogPosts = JSON.parse(storedPosts);
//     }
//   }
  

//   createBlogPost(post: BlogPost): void {
//     this.blogPosts.push(post);
//     this.savePostsToLocalStorage();
//   }

//   private savePostsToLocalStorage() {
//     localStorage.setItem('blogPosts', JSON.stringify(this.blogPosts));
//   }
// }
