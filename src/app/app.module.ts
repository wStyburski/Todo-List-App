import { TaskService } from './../../../Old/todo-list/src/app/task.service';
import { AuthService } from './services/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { LoginComponent } from './components/login/login.component';
import { TasklistComponent } from './components/tasklist/tasklist.component';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';

const configFirebase = {
  apiKey: 'AIzaSyDd7wSEt2vk43Nina0jyv1ukHShtr8uEyQ',
  authDomain: 'to-do-list-app-13dad.firebaseapp.com',
  databaseURL: 'https://to-do-list-app-13dad.firebaseio.com',
  projectId: 'to-do-list-app-13dad',
  storageBucket: '',
  messagingSenderId: '154264299541',
  appId: '1:154264299541:web:8bfd979842e3dc25'
};

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    TasklistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(configFirebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatTooltipModule,
    MatListModule,
    MatTabsModule
  ],
  providers: [AuthService, TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
