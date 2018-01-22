import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

import { v1 } from 'uuid';

@Injectable()
export class NotificationService {

  private notifications: any;
  private subject = new Subject<any>();

  constructor() {
    this.notifications = [];
  }

  addNotification(type) {
    const notification = {
      type: type,
      id: v1()
    };

    this.notifications.push(notification);
    this.sendMessage(this.notifications);
  }

  getAllNotes() {
    return this.notifications;
  }

  deleteNote(notificationId) {
    this.notifications = this.notifications
      .filter(notification => notification.id !== notificationId);

    this.sendMessage(this.notifications);
  }

  sendMessage(allNotes) {
    this.subject.next(allNotes);
  }

  clearMessage() {
    this.subject.next();
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
}
