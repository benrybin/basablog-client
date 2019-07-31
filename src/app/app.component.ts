import { Component } from '@angular/core';
import { User } from 'src/app/user';
import { BlogService } from './blog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loginstatus = true;
  title = 'unZip';
  blogService : BlogService;

  userstatuschange(value: boolean) {
    this.loginstatus = value;
  }

  getLoggedInStatus(): boolean {
    return this.loginstatus;
  }

  goHome() : void {
    this.blogService.findAllBlogPostsDesc;
  }
}
