import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'register-form',
  templateUrl: 'register-form.html',
  styleUrls: ['../../login.scss']
})
export class RegisterFormComponent {

  public form: FormGroup;
  public submitted: boolean;
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


  register(model, isValid) {
    this.submitted = true;
    console.log('register()');
  }

}
