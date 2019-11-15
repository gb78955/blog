export class Post {
  loveIts: number;
  constructor(public title: string, public content: string, public  createdAt: string) {
    this.loveIts = 0;
  }
}
