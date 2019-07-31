import { Component } from '@angular/core';
import { User } from 'src/app/user';
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cookservice:CookieService;
  loginstatus = false;
  title = 'unZip';
  cookieStatus:string;

  userstatuschange(): boolean{
    this.cookieStatus=this.cookservice.get("name");
    if(this.cookieStatus==="test2"){
      return true
    }
  }

  getLoggedInStatus(): boolean {
    return this.loginstatus;
  }
}
