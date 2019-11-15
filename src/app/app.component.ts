import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyDCEhsuZu3w-9qAULYCztYBpVuOp_Uq2xw",
      authDomain: "post-7fc35.firebaseapp.com",
      databaseURL: "https://post-7fc35.firebaseio.com",
      projectId: "post-7fc35",
      storageBucket: "post-7fc35.appspot.com",
      messagingSenderId: "9499483585",
      appId: "1:9499483585:web:b50b6fdb155d727aaae340"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
