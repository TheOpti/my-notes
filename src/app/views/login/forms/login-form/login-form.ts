import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'login-form',
  templateUrl: 'login-form.html',
  styleUrls: ['../../login.scss']
})
export class LoginFormComponent {

  public form: FormGroup;
  public submitted: boolean;
  public events: any[] = [];

  constructor(private router: Router, private _fb: FormBuilder) {}

  ngOnInit() {
    this.form = this._fb.group({
      login: ['', [<any>Validators.required]],
      password: ['', [<any>Validators.required]]
    });

    this.subcribeToFormChanges();
  }


  subcribeToFormChanges() {
    const formStatusChanges$ = this.form.statusChanges;
    const formValueChanges$ = this.form.valueChanges;

    formStatusChanges$.subscribe(x => this.events.push({ event: 'STATUS_CHANGED', object: x }));
    formValueChanges$.subscribe(x => this.events.push({ event: 'VALUE_CHANGED', object: x }));
  }

  save(model, isValid) {
    this.submitted = true;
    if (isValid) {
      // TODO implement login logic
      this.router.navigate(['/application/notes']);
    }
  }
}
