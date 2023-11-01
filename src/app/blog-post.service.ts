import { Injectable } from '@angular/core';
import { BlogPost } from './blog-post';
import { Comment } from './comment';
import { ActiveUserService } from './active-user.service';

@Injectable({
  providedIn: 'root'
})
export class BlogPostServiceService {
  private _blogposts: BlogPost[] = [];

  constructor(private auth: ActiveUserService) {
    this._blogposts = this.load();
   }

   private load(): BlogPost[] {
    let json = localStorage.getItem
    ('blogposts');
    return json !== null ? JSON.parse
    (json) : [];
   };

   public save(): void {
    localStorage.setItem('blogposts',
    JSON.stringify(this._blogposts));
   }

   public get blogposts(): BlogPost[] {
    return this._blogposts;
   }
   
   public addBlogpost(content: string):
   void {
    if (this.auth.activeUser !==
      undefined) {
        this._blogposts.push(
          new BlogPost(this._blogposts.length, content, this.auth.activeUser.id),
        );
        this.save();
      }
   }

   public addComment(blogpost: BlogPost,
    content: string): void {
      if (this.auth.activeUser.Id !==
        undefined) {
          blogpost.comments.push(new Comment(content, this.auth.activeUser.id));
            this.save();
        }
    }
}
