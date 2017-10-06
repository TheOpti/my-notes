import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

const LOGIN_STATES = {
  LOGIN: 'login',
  REGISTER: 'register',
  PASSWORD_FORGOT: 'password-forgot',
  REGISTERED: 'registered',
};

@Component({
  selector: 'login',
  templateUrl: 'login.html',
  styleUrls: ['login.scss']
})
export class LoginComponent {

  private mode: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route
      .data
      .subscribe(data => {
        this.mode = LOGIN_STATES[data.state];
      });
  }

}
