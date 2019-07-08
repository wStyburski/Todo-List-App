import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user: firebase.User;

  constructor(private angularAuth: AngularFireAuth) {
    angularAuth.authState.subscribe(user => this.user = user);
  }

  public register(value) {
    // tslint:disable-next-line: no-shadowed-variable
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
        .then(res => {
          resolve(res);
        }, err => reject(err));
    });
  }

  public login(value) {
    // tslint:disable-next-line: no-shadowed-variable
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(value.email, value.password)
        .then(res => {
          resolve(res);
        }, err => {
          reject(err);
        });
    });
  }

  public logOut() {
    firebase.auth().signOut();
  }
}
