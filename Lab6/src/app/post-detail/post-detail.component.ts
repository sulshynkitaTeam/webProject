import {Component, Inject, OnInit} from '@angular/core';
import {Post} from "../models";
import {ActivatedRoute} from "@angular/router";
import  {POSTS} from "../db";
import {Location} from "@angular/common";
import {PostsService} from "../posts.service";

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  post: Post | undefined;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private postsService: PostsService) {
  }

  ngOnInit(): void {
    // const id = Number(this.route.snapshot.paramMap.get('id'));
    // this.post = POSTS.find((x) => x.id === id)
    // this.route.paramMap.subscribe((params) => {
    //   const id = Number(params.get('id'));
    //   this.post = POSTS.find((x) => x.id === id);
    // })
    this.getPost();
  }

  getPost() {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.post = this.postsService.getPost(id);
    })
  }

  goBack(){
    this.location.back();
  }

}
