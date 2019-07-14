import { Component, OnInit } from '@angular/core';
import {CommentConnectService} from 'src/app/comment-connect.service';
import {Comment} from 'src/app/comments';


@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.css']
})
export class CommentsListComponent implements OnInit {

  comments: Comment[];

  constructor(private commentService: CommentConnectService) { }

  ngOnInit() {
    this.commentService.findAll().subscribe(data => {
      this.comments = data;
    });
  }

}
