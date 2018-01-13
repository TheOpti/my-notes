import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'register-form',
  templateUrl: 'register-form.html',
  styleUrls: ['../../login.scss']
})
export class RegisterFormComponent {

  public form: FormGroup;
  public submitted: boolean;
  public events: any[] = [];
  public serverErrorMessage = '';

  constructor(private http: HttpClient, private router: Router, private _fb: FormBuilder) { }

  ngOnInit() {
    this.form = this._fb.group({
      login: ['', [<any>Validators.required]],
      email: ['', [<any>Validators.required]],
      password: ['', [<any>Validators.required]],
      repeatedPassword: ['', [<any>Validators.required]]
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
    if (isValid) {
      this.http.post('http://localhost:3000/register', { user: model })
        .subscribe(
          () => { this.router.navigate(['/registration-complete']); },
          (error) => { this.serverErrorMessage = JSON.parse(error.error).msg; }
        );
    }
  }

}
