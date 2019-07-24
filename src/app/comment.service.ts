import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Comment} from 'src/app/comment';
import {Observable} from 'rxjs'; 
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private postURL: string;


  constructor(private http:HttpClient) {
    this.postURL = environment.apiUrl + "comments/add";
   }

  public findAll(postid : number): Observable<Comment[]> {
    return this.http.get<Comment[]>(environment.apiUrl + `${postid}/comments/all`);
  }
  
  public save(comment: Comment) {
    return this.http.post<Comment>(this.postURL, comment);
  }
}
