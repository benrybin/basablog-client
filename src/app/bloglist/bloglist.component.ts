import { Component, OnInit } from '@angular/core';
import { BlogService} from 'src/app/blog.service';
import {Post} from 'src/app/post';
import {Comment} from 'src/app/comment';
import { FilterPipe } from '../filter.pipe';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-bloglist',
  templateUrl: './bloglist.component.html',
  styleUrls: ['./bloglist.component.css']
})

export class BloglistComponent implements OnInit {
  filter:FilterPipe;
  posts: Post[];
  search : string;
  constructor(private blogService: BlogService,
    private route: ActivatedRoute
    ) {
  }
  ngOnInit() {
    this.getBlogPostsDesc();
  }

  getBlogPosts(): void {
    this.blogService.findAllBlogPost()
    .subscribe(posts => this.posts = posts);
  }

  getBlogPostsDesc(): void {
    this.blogService.findAllBlogPostsDesc()
    .subscribe(posts => this.posts = posts);
  }

  getBlogPostsByTag(tag : string): void {
    this.blogService.findAllBlogPostByTag1(tag)
    .subscribe(posts => 
      {
        console.log(posts);
        this.posts = posts;
      }
    );
  }
}

