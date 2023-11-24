// blog-app\src\app\comment-item\comment-item.component.ts

import { Component, Input } from '@angular/core';
import { Comment } from '../comment';
import { formatDate } from '@angular/common';


@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.css'],
})
export class CommentComponent {
  @Input() comment: Comment = {} as Comment;

  formatDate(date: Date): string {
    return formatDate(date, 'yyyy-MM-dd', 'en-US');
  }
}
