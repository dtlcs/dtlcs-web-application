import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import {FirebaseAuthService} from "./services/firebase-auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(public firebaseAuthService: FirebaseAuthService) {
  }

  isAuthenticated(){
    return this.firebaseAuthService.authState !== null;
  }
}
