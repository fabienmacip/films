import { Component } from '@angular/core';
//import firebase from 'firebase';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'films';

  constructor() {
    const firebaseConfig = {
      apiKey: "AIzaSyBKyGPIyz95Ffi0uquGR8DX82MNvEQiBvk",
      authDomain: "films-5fcd2.firebaseapp.com",
      databaseURL: "https://films-5fcd2.firebaseio.com",
      projectId: "films-5fcd2",
      storageBucket: "films-5fcd2.appspot.com",
      messagingSenderId: "507166744504",
      appId: "1:507166744504:web:d14cc0d48ed11b5e88794d",
      measurementId: "G-M87P48RTG8"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

  }

}
