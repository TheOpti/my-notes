import { Component, Input } from '@angular/core';

@Component({
  selector: 'reminder-bar',
  templateUrl: 'reminder-bar.html',
  styleUrls: ['reminder-bar.scss']
})
export class ReminderBarComponent {

  @Input() reminder: any;

  constructor() {
  }
}
