import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ToggleUserComponent } from './toggle-user/toggle-user.component';
import { AdminCreatePostComponent } from './admin-create-post/admin-create-post.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogPostItemComponent } from './blog-post-item/blog-post-item.component';
import { CommentComponent } from './comment-item/comment-item.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ToggleUserComponent,
    AdminCreatePostComponent,
    BlogPostComponent,
    BlogPostItemComponent,
    CommentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
