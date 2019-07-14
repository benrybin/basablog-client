import { Injectable } from '@angular/core';
import {Comments} from 'src/app/comments'
import { Observable} from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentConnectService {private postUrl: string;



  constructor(private http: HttpClient) {
    this.postUrl = 'http://localhost:8080/comments/all';
   }
   public findAll(): Observable<Comments[]> {
    return this.http.get<Comments[]>(this.postUrl);
  }
 
  public save(comment: Comments) {
    return this.http.post<Comments>(this.postUrl,comment);
  }
}
