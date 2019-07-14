import { Injectable } from '@angular/core';
import {Comment} from 'src/app/comment'
import { Observable} from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentConnectService {private postUrl: string;



  constructor(private http: HttpClient) {
    this.postUrl = 'http://localhost:8080/comments/all';
   }
   public findAll(): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.postUrl);
  }
 
  public save(comment: Comment) {
    return this.http.post<Comment>(this.postUrl,comment);
  }
}
