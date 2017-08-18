import { Component } from '@angular/core';

import v1 from 'uuid/v1';

@Component({
  selector: 'notifications',
  templateUrl: 'notifications.html',
  styleUrls: ['notifications.scss']
})
export class NotificationsComponent {

  private notifications: any;

  ngOnInit() {
    this.notifications = [];
  }

  deleteNotification(notificationId) {
    this.notifications = this.notifications
      .filter(notification => notification.id !== notificationId);
  }

}
