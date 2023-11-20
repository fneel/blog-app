import { Component, Input } from '@angular/core';
import { BlogPostService } from '../blog-post.service';
import { BlogPost } from '../blog-post';
import { ActiveUserService } from '../active-user.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css'],
})
export class BlogPostComponent {
  @Input() post!: BlogPost;

  constructor(private blogPostService: BlogPostService) {}
  activeUserService = ActiveUserService;
  // Exempel på sökväg i en komponent
  imagePath: string = 'assets/images/minbild.jpg';

  // Funktion för att formatera datumet som en sträng
  formatDate(date: Date): string {
    return new Date(date).toLocaleDateString(); // Du kan anpassa formatet om det behövs
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
