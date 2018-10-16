import { Component,OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appCompras';

  ngOnInit () {
    firebase.initializeApp({
    apiKey: 'AIzaSyD6OgWX4V6cnXTZCLNL6D_Z0vPqzgmGvV0',
    authDomain: 'appcompras-85d9f.firebaseapp.com'
    });
  }
}
