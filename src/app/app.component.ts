import { Component,OnInit, Input} from '@angular/core';
import { User } from 'src/app/user';
import {CookieService} from "ngx-cookie-service";
import { BlogService } from './blog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  loginstatus = false;
  title = 'unZip';
  
  blogService : BlogService;
  constructor( private cookservice: CookieService ) { }
  ngOnInit(){
    
    

  }
  userstatuschange(): boolean{
    if(!this.cookservice.check("name")){return false}
    if(this.cookservice.get("name")==="test2"){
      this.loginstatus=true;
    }
    
  }

  getLoggedInStatus(): boolean {
    return this.loginstatus;
  }

  goHome() : void {
    this.blogService.findAllBlogPostsDesc;
  }
}
