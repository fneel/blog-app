import { Comment } from "./comment";

export class BlogPost {
    public id: number;
    public content: string;
    public userId: number;
    public comments: Comment[];
    public upvotes: number;
    public downvotes: number;

    constructor(id: number, content: string, userId: number) {
        this.id = id;
        this.content = content;
        this.userId = userId;
        this.comments = [];
        this.upvotes = 0;
        this.downvotes =0;
    }
}

// ska innehålla:
// { title: string; 
// thumbnailUrl: string; 
// body: string; 
// creationDate: Date; 
// likes: number; 
// dislikes: number; 
// comments: string[]; }