import { Component, Input, Output, EventEmitter } from '@angular/core';

const notificationsTypesMap = {
  'note-delete': 'This note has been deleted',
  'note-add': 'You added a new note'
};

@Component({
  selector: 'notification',
  templateUrl: 'notification.html',
  styleUrls: ['notification.scss']
})
export class NotificationComponent {

  private notificationTypeMessage: string;

  @Input() type: string;
  @Input() id: string;

  @Output() onDeleteClick: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
    this.notificationTypeMessage = notificationsTypesMap[this.type];

    setTimeout(() => {
      this.onDeleteClick.emit(this.id);
    }, 10000);
  }

  closeNotification() {
    this.onDeleteClick.emit(this.id);
  }
}
