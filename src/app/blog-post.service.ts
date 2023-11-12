import { Injectable } from '@angular/core';
import { BlogPost } from './blog-post.model';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BlogPostService {
  private blogPosts: BlogPost[] = [];

  constructor(private http: HttpClient) {
    this.blogPosts = this.loadLocalData();
  }

  private loadLocalData(): BlogPost[] {
    let posts = localStorage.getItem('posts');
    return !posts ? [] : JSON.parse(posts);
  }

  public get posts(): BlogPost[] {
    return this.blogPosts;
  }

  public getAllBlogPosts(): Observable<BlogPost[]> {
    return of(this.blogPosts); // Använd 'of' från rxjs/operators
  }

  public createBlogPost(post: BlogPost, file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post<any>('http://localhost:4000/uploads', formData).pipe(
      map((response) => {
        // Extract the file path from the server response
        const filePath = response.filePath;

        // Assign the file path to post.thumbnailURL
        post.thumbnailURL = filePath;

        // Add the post to the local array
        this.blogPosts.push(post);

        // Save posts to local storage
        this.savePostsToLocalStorage();

        // Return the response for further processing if needed
        return response;
      })
    );
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
