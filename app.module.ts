import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { FormsModule } from '@angular/forms';
import { ImagesComponent } from './images/images.component';
import { LoginComponent } from './login/login.component';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFireDatabase } from '@angular/fire/database';
import { AuthGuardService } from './auth-guard.service';




var config = {
  apiKey: "AIzaSyD3euH20ue2vLWKcHeeO3FygcYgoW3uORc",
  authDomain: "apm7-fb2b0.firebaseapp.com",
  databaseURL: "https://apm7-fb2b0.firebaseio.com",
  projectId: "apm7-fb2b0",
  storageBucket: "apm7-fb2b0.appspot.com",
  messagingSenderId: "142942182860",
  appId: "1:142942182860:web:814dd96a8ad9fe10601169",
  measurementId: "G-S58QCDJCDW"
};

@NgModule({
  declarations: [
    AppComponent,
    ImagesComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    FormsModule

  ],
  providers: [AngularFireStorage,AngularFireDatabase,AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
