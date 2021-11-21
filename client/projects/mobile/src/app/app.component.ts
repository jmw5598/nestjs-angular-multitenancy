import { Component, OnInit } from '@angular/core';

import { firebase } from '@nativescript/firebase';

@Component({
  selector: 'ns-app',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    firebase.init({
      showNotifications: true,
      showNotificationsWhenInForeground: true,

      onPushTokenReceivedCallback: (token) => {
        console.log('[Firebase] onPushTokenReceivedCallback:', { token });
      },

      onMessageReceivedCallback: (message: firebase.Message) => {
        console.log('[Firebase] onMessageReceivedCallback:', { message });
      }
    } )
      .then(() => {
        console.log('[Firebase] Initialized');
      })
      .catch(error => {
        console.log('[Firebase] Initialize', { error });
      });
  }
}
