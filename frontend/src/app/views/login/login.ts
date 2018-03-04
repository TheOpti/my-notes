import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

const LOGIN_STATES = {
  LOGIN: 'login',
  REGISTER: 'register',
  PASSWORD_FORGOT: 'password-forgot',
  REGISTERED: 'registered',
  REGISTRATION_COMPLETE: 'registration-complete',
};

@Component({
  selector: 'login',
  templateUrl: 'login.html',
  styleUrls: ['login.scss']
})
export class LoginComponent {

  public mode: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route
      .data
      .subscribe((data: any) => {
        this.mode = LOGIN_STATES[data.state];
      });
  }

}
