import { Component, OnInit } from '@angular/core';
import { CommentService } from '../comment.service';
import { ActivatedRoute, Router } from '@angular/router'; 
import { Comment } from '../comment';


@Component({
  selector: 'app-addcomment',
  templateUrl: './addcomment.component.html',
  styleUrls: ['./addcomment.component.css']
})
export class AddcommentComponent implements OnInit {

  comment : Comment;

   constructor(private route:ActivatedRoute, private commentService : CommentService ,private router: Router) {
      this.comment = new Comment();
   }

  ngOnInit() {
  }

  onSubmit(){
    this.comment.postId = +this.route.snapshot.paramMap.get('id');
    this.commentService.save(this.comment).subscribe(result => this.gotoUserList());
  }

  gotoUserList(){
    this.router.navigate(['comments/add']);
  }

}
