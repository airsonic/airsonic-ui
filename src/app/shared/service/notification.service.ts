import { Injectable } from '@angular/core';
declare let Notification: any;

@Injectable()
export class NotificationService {

  constructor() { }

  notify(message: String) {
    if (!Notification) {
      // TODO: Handle problem where we don't have notifications
    } else if (Notification.permission === 'granted') {
      Notification(message);
    } else if (Notification.permission !== 'denied') {
      Notification.requestPermission(permission => {
        if (permission === 'granted') {
          Notification(message);
        }
      });
    } else {
      // TODO: handle case where user doesn't allow notifications
    }
  }
}
