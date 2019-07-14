import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Post} from 'src/app/post'
import { Observable} from 'rxjs'
  

@Injectable({
  providedIn: 'root'
})
export class SprintConnectService {
  private postUrl: string;



  constructor(private http: HttpClient) {
    this.postUrl = 'http://localhost:8080/users';
   }
   public findAll(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postUrl);
  }
 
  public save(user: Post) {
    return this.http.post<Post>(this.postUrl, user);
  }

}
