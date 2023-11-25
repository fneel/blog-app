

import { Comment } from "./comment";

export class BlogPost {
public id: number;
public title: string;
public body: string;
public thumbnailUrl: string;
public creationDate: Date;
public likes: number;
public dislikes: number;
public comments: Comment[];
constructor(
  id: number, 
  title: string,
  body: string,
  thumbnailUrl: string,
  creationDate: Date,
  likes: number,
  dislikes: number,
  comments: Comment[]
) {
  this.id = id;
  this.title = title;
  this.body = body;
  this.thumbnailUrl = thumbnailUrl;
  this.creationDate = creationDate;
  this.likes = likes;
  this.dislikes = dislikes;
  this.comments = comments;
}


}