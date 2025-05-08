import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { error } from 'console';
import { Observable } from 'rxjs';
import { User } from '../_models/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  model: any = {};
  //loggedIn: boolean;
  //currentUser$: Observable<User>;

  constructor(public accountService: AccountService) {}

  ngOnInit(): void {
    //this.getCurrentUser();
    //this.currentUser$ = this.accountService.currentUser$;
  }

  login() {
    this.accountService.login(this.model).subscribe({
      next: (response) => {
        console.log('Login successful:', response);
        //this.loggedIn = true;
      },
      error: (error) => {
        console.error('Login failed:', error);
      },
    });
  }

  logout() {
    this.accountService.logout();
    //this.loggedIn = false;
  }

  /*getCurrentUser() {
    this.accountService.currentUser$.subscribe({
      next: (user) => {
        this.loggedIn = !!user;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }*/
}
