import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from 'src/app/user';
import {UserService} from '../user.service';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User;
  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) {
    this.user = new User();
  }

  ngOnInit() {
  }

  onSubmit() {
    return this.userService.verifyUser(this.user).forEach(result => this.verify());
  }

  verify() {
    return this.router.navigate(['']);
  }
}