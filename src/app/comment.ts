export class Comment {
   public id: number;
   public date: Date;
    public body: string;
    public postId: number;
    constructor(
        id: number,
        date: Date,
        body: string,
        postId: number
    ) {
        this.id = id;
        this.date = date;
        this.body = body;
        this.postId = postId;
    }
}
