import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddblogComponent } from './addblog/addblog.component';
import { BloglistComponent } from './bloglist/bloglist.component';
import { UserComponent } from './user/user.component';
import { BlogComponent } from './blog/blog.component';
import { CommentComponent } from './comment/comment.component';
import { AdduserComponent } from './adduser/adduser.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { HttpErrorInterceptor } from './http-error.interceptor';
import { AddcommentComponent } from './addcomment/addcomment.component';


@NgModule({
  declarations: [
    AppComponent,
    AddblogComponent,
    BloglistComponent,
    UserComponent,
    BlogComponent,
    CommentComponent,
    AdduserComponent,
    AddcommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpErrorInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
