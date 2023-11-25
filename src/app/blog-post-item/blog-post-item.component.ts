import { Component, Input } from '@angular/core';
import { BlogPost } from '../blog-post';



@Component({
  selector: 'app-blog-post-item',
  templateUrl: './blog-post-item.component.html',
  styleUrls: ['./blog-post-item.component.css'],
})
export class BlogPostItemComponent {
  @Input() post: BlogPost = {} as BlogPost;
}
