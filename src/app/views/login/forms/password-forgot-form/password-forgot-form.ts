import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'password-forgot-form',
  templateUrl: 'password-forgot-form.html',
  styleUrls: ['../../login.scss']
})
export class PasswordForgotFormComponent {

  public form: FormGroup;
  public submitted: boolean;
  public showError: boolean;
  public events: any[] = [];

  constructor(private router: Router, private _fb: FormBuilder) { }

  ngOnInit() {
    this.form = this._fb.group({
      login: ['', [<any>Validators.required]],
      email: ['', [<any>Validators.required]],
      password: ['', [<any>Validators.required]],
      passwordRepeat: ['', [<any>Validators.required]]
    });

    this.subcribeToFormChanges();
  }


  subcribeToFormChanges() {
    const formStatusChanges$ = this.form.statusChanges;
    const formValueChanges$ = this.form.valueChanges;

    formStatusChanges$.subscribe(x => this.events.push({ event: 'STATUS_CHANGED', object: x }));
    formValueChanges$.subscribe(x => this.events.push({ event: 'VALUE_CHANGED', object: x }));
  }


  resetPassword(model) {
    this.submitted = true;

    if (model.email === 'foo') {
      this.showError = true;
      return;
    }

    console.log('resetPassword()');
  }

}
