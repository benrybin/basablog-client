import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TagsComponent } from './tags/tags.component';
import { PostsComponent } from './posts/posts.component';
import { PostcommentsComponent } from './postcomments/postcomments.component';
import { PostDetailsComponent } from './post-details/post-details.component';
<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http';

=======
import { CommentsListComponent } from './comments-list/comments-list.component';
import {HttpClientModule} from "@angular/common/http";
>>>>>>> f6f91bc3e717f8ec94fadcad4f9f1d231be8d44f

@NgModule({
  declarations: [
    AppComponent,
    TagsComponent,
    PostsComponent,
    PostcommentsComponent,
    PostDetailsComponent,
    CommentsListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
