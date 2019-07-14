import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TagsComponent } from './tags/tags.component';
import { PostsComponent } from './posts/posts.component';
import { PostcommentsComponent } from './postcomments/postcomments.component';

@NgModule({
  declarations: [
    AppComponent,
    TagsComponent,
    PostsComponent,
    PostcommentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
