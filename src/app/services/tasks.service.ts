import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  public tasks: Array<any> = [];

  constructor(
    private authService: AuthService,
    private db: AngularFirestoreModule) {
    this.getTasks();
  }

  public getTasks() {
    firebase.firestore()
      .collection('tasks')
      .where('email', '==', this.authService.user.email)
      .get()
      .then(collection => {
        this.tasks = [];
        collection.forEach(document => {
          this.tasks.push(document);
        });
      });
  }

  public addTask(email: string, name: string, isDone: boolean) {
    firebase.firestore()
    .collection('tasks')
    .add({email, name, isDone})
    .then(() => this.getTasks());
  }

  public deleteTask(document: any): void {
    document.ref.delete().then(() => this.getTasks());
  }

  public updateTask(email: string, name: string, status: boolean): void {
    firebase.firestore()
    .collection('tasks')
    .where('email', '==', email)
    .where('name', '==', name)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        firebase.firestore().collection('tasks').doc(doc.id).update({isDone: status});
      });
    }).then(() => this.getTasks());
  }
}
