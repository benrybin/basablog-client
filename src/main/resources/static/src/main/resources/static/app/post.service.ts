import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  postUrl  = 'assets/post.json';

  getPost() {
    return this.http.get(this.postUrl);
  }
}
