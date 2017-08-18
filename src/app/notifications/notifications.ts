import { Component } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'notifications',
  templateUrl: 'notifications.html',
  styleUrls: ['notifications.scss']
})
export class NotificationsComponent {

  private notifications: any;
  private subscription: Subscription;

  constructor(private notificationService: NotificationService) {
    this.notifications = [];
  }

  ngOnInit() {
    this.subscription = this.notificationService.getMessage()
      .subscribe(notifications => {
        this.notifications = notifications;
      });
  }

  deleteNotification(notificationId) {
    this.notificationService.deleteNote(notificationId);
  }

}
