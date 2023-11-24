// blog-app\src\app\blog-post\blog-post.component.ts

import { Component, Input, OnInit } from '@angular/core';
import { BlogPostService } from '../blog-post.service';
import { BlogPost } from '../blog-post';
import { ActiveUserService } from '../active-user.service';
import { ActivatedRoute } from '@angular/router';
import { Comment } from '../comment';
import { CommentService } from '../comment.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css'],
})
export class BlogPostComponent {
  id: number = -1;

  constructor(
    private activatedRoute: ActivatedRoute,
    private blogPostService: BlogPostService,
    private commentService: CommentService
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.id = +params['id'];
    });
  }

  get post(): BlogPost | undefined {
    return this.blogPostService.blogPosts.find((all) => all.id === this.id);
  }

  // Funktion för att formatera datumet som en sträng
  formatDate(date: Date): string {
    return new Date(date).toLocaleDateString(); // Du kan anpassa formatet om det behövs
  }

  get comments(): Comment[] | undefined {
    let post = this.post;
    if (!post) return undefined;

    let comments = this.commentService.comments.filter(
      (all) => all.postId === post?.id
    );

    return comments;
  }

  sendComment(body: string): void {
    let post = this.post;

    if (!post) return;

    this.commentService.addComment(body, post);
  }

  // Funktion för att öka antalet likes
  increaseLikes(): void {
    if (this.post !== undefined) {
      this.post.likes++;
      this.blogPostService.savePostsToLocalStorage();
    }
  }

  // Funktion för att öka antalet dislikes
  increaseDislikes(): void {
    if (this.post !== undefined) {
      this.post.dislikes++;
      this.blogPostService.savePostsToLocalStorage();
    }
  }

  // Funktion för att radera posten
  deletePost(): void {
    if (this.post !== undefined) {
      const index = this.blogPostService.getPosts().indexOf(this.post);
      if (index !== -1) {
        this.blogPostService.getPosts().splice(index, 1);
        this.blogPostService.savePostsToLocalStorage();
      }
    }
  }
}
