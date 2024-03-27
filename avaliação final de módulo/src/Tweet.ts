import crypto from "crypto";

export class Tweet {
  id: string;
  userId: string;
  content: string;
  reply: boolean;
  likes: [];
  replies: [];

  constructor(userId: string, content: string, reply: boolean) {
    this.id = crypto.randomUUID();
    this.userId = userId;
    this.content = content;
    this.reply = reply;
    this.likes = [];
    this.replies = [];
  }
}
