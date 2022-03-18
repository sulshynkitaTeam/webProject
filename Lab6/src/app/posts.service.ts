import { Injectable } from '@angular/core';
import {POSTS} from "./db";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor() { }

  getPosts() {
    return POSTS;
  }

  getPost(id: number) {
    return POSTS.find((x) => x.id === id);
  }
}
