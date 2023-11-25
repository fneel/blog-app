
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
    public activeUserService: ActiveUserService,
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

  formatDate(date: Date): string {
    return new Date(date).toLocaleDateString();
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

  increaseLikes(): void {
    if (this.post !== undefined) {
      this.post.likes++;
      this.blogPostService.savePostsToLocalStorage();
    }
  }

  increaseDislikes(): void {
    if (this.post !== undefined) {
      this.post.dislikes++;
      this.blogPostService.savePostsToLocalStorage();
    }
  }

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
