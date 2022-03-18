import { Component, OnInit } from '@angular/core';
import {Post} from "../models";
import { POSTS } from '../db';
import {PostsService} from "../posts.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.getPosts();
  }
  getPosts() {
    this.posts = this.postsService.getPosts();
  }

}
