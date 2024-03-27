import crypto from "crypto";

export class User {
  id: string;
  name: string;
  username: string;
  email: string;
  password: string;

  constructor(name: string, username: string, email: string, password: string) {
    this.id = crypto.randomUUID();
    this.name = name;
    this.username = username;
    this.email = email;
    this.password = password;
  }
}
