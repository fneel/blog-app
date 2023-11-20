import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { AdminCreatePostComponent } from './admin-create-post/admin-create-post.component';
import { HeaderComponent } from './header/header.component';
import { ToggleUserComponent } from './toggle-user/toggle-user.component';
import { BlogPostService } from './blog-post.service';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogPostItemComponent } from './blog-post-item/blog-post-item.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'create', component: AdminCreatePostComponent },
  { path: 'toggle', component: ToggleUserComponent },
  { path: 'blog-post/:id', component: BlogPostComponent },
  { path: 'blog-post-item', component: BlogPostItemComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
