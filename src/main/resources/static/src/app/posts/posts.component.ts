import { Component, OnInit } from '@angular/core';
import { Post } from '../post'
import { POSTS } from '../mock-posts'
import { PostService } from '../post.service'


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnInit {
  posts = POSTS;
  selectedPost: Post;

  constructor() { }

  ngOnInit() {
  }

  onSelect(post: Post): void {
    this.selectedPost = post;
  }

  // showPost() {
  //   this.postService.getPost()
  //   .subscribe((data : Post)) => this.post = {
  //     postsUrl: data['post']
  //   }
  // }

}
