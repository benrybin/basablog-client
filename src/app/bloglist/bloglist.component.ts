import { Component, OnInit } from '@angular/core';
import { BlogService} from 'src/app/blog.service';
import {Post} from 'src/app/post';
import {Comment} from 'src/app/comment';
import { FilterPipe } from '../filter.pipe';

@Component({
  selector: 'app-bloglist',
  templateUrl: './bloglist.component.html',
  styleUrls: ['./bloglist.component.css']
})
export class BloglistComponent implements OnInit {
  filter:FilterPipe;
  posts: Post[];

  constructor(private blogService: BlogService) {
  }
  ngOnInit() {
    this.getBlogPosts();
  }

  getBlogPosts(): void {
    this.blogService.findAllBlogPost()
    .subscribe(posts => this.posts = posts);
  }
}

