import { Injectable } from '@angular/core';
import { Comment } from './comment';
import { BlogPost } from './blog-post';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  public postComments: Comment[] = this.loadLocalData();

  constructor() {
    this.postComments = this.loadLocalData();
  }
  private loadLocalData(): Comment[] {
    let comments = localStorage.getItem('comments');
    return comments ? JSON.parse(comments) : [];
  }

  public get comments(): Comment[] {
    return this.postComments;
  }

  public addComment(body: string, post: BlogPost) {
    this.postComments.push({
      id: this.postComments.length + 1,
      date: new Date(), 
      body,
      postId: post.id,
    });

    localStorage.setItem('comments', JSON.stringify(this.postComments));
  }
}
