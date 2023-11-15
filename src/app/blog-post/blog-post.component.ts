import { Component, Input } from '@angular/core';
import { BlogPost } from '../blog-post.model';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css'],
})
export class BlogPostComponent {
  @Input() post!: BlogPost;
}
