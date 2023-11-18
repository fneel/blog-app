

export class BlogPost {
public title: string;
public thumbnailUrl: string;
public body: string;
public creationDate: Date;
public likes: number;
public dislikes: number;
public comments: Comment[];
constructor(
  title: string,
  thumbnailUrl: string,
  body: string,
  creationDate: Date,
  likes: number,
  dislikes: number,
  comments: Comment[]
) {
  this.title = title;
  this.thumbnailUrl = thumbnailUrl;
  this.body = body;
  this.creationDate = creationDate;
  this.likes = likes;
  this.dislikes = dislikes;
  this.comments = comments;
}






  // public title: string = '';
  // public thumbnailUrl: string = '';
  // public body: string = '';
  // public creationDate: Date = new Date();
  // public likes: number = 0;
  // public dislikes: number = 0;
  // public comments: string[] = [];

  // constructor(
  //   title?: string,
  //   thumbnailUrl?: string,
  //   body?: string,
  //   creationDate?: Date,
  //   likes?: number,
  //   dislikes?: number,
  //   comments?: string[]
  // ) {
  //   if (title) this.title = title;
  //   if (thumbnailUrl) this.thumbnailUrl = thumbnailUrl;
  //   if (body) this.body = body;
  //   if (creationDate) this.creationDate = creationDate;
  //   if (likes !== undefined) this.likes = likes;
  //   if (dislikes !== undefined) this.dislikes = dislikes;
  //   if (comments) this.comments = comments;
  // }
}

// ska innehålla:
// { title: string;
// thumbnailUrl: string;
// body: string;
// creationDate: Date;
// likes: number;
// dislikes: number;
// comments: string[]; }
