import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'password-forgot-form',
  templateUrl: 'password-forgot-form.html',
  styleUrls: ['../../login.scss']
})
export class PasswordForgotFormComponent {

  constructor(private router: Router) { }

  resetPassword() {
    console.log('resetPassword()');
  }

}
