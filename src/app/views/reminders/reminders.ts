import { Component } from '@angular/core';

@Component({
  selector: 'reminders',
  templateUrl: 'reminders.html',
  styleUrls: ['reminders.scss']
})
export class RemindersComponent {

  private reminders : any;


  constructor() {
    this.reminders = []
  }

}