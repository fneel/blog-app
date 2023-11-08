export interface BlogPost {
  title: string;
  thumbnailURL: string;
  body: string;
  creationDate: Date;
  likes: number;
  dislikes: number;
  comments: string[];
}
