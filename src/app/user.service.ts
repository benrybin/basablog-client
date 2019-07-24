import { Injectable } from '@angular/core';
import {User} from './user';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {NgModel} from "@angular/forms";
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl: string;
  private verifyUrl: string;

  constructor(private http: HttpClient) {
    this.userUrl = environment.apiUrl + 'users/add';
    this.verifyUrl = environment.apiUrl + 'users/verify';
  }
  public save(user: User) {
    return this.http.post<User>(this.userUrl, user);
  }

  public verifyUser(user: User) {
    return this.http.post<User>(this.verifyUrl, user);
  }
}

