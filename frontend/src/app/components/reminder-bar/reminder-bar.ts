import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'reminder-bar',
  templateUrl: 'reminder-bar.html',
  styleUrls: ['reminder-bar.scss']
})
export class ReminderBarComponent {

  @Input() reminder: any;

  @Output() onDeleteClick = new EventEmitter<any>();

  constructor() { }

  removeReminder($event) {
    this.onDeleteClick.emit($event);
  }

}
