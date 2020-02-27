import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
  selectedVal: string;
  responseMessage: string = '';
  responseMessageType: string = '';
  emailInput: string;
  passwordInput: string;
  isForgotPassword: boolean;
  userDetails: any;
  user:firebase.User;
  constructor(
    private router:Router,
    private authService: AuthenticationService,
    private afAuth:AngularFireAuth
    ) {
      this.selectedVal = 'login';
      this.isForgotPassword = false;
      afAuth.authState.subscribe(user=>this.user=user);
     }
     showMessage(type, msg) {
      this.responseMessageType = type;
      this.responseMessage = msg;
      setTimeout(() => {
        this.responseMessage = "";
      }, 2000);
    }
   
    // Called on switching Login/ Register tabs
    public onValChange(val: string) {
      this.showMessage("", "");
      this.selectedVal = val;
    }
   
 login(){
  this.responseMessage = "";
  this.authService.login(this.emailInput, this.passwordInput)
    .then(res => {
      console.log(res);
      this.showMessage("success", "Successfully Logged In!");
      this.router.navigate(['/login'])
    }, err => {
      this.showMessage("danger", err.message);
    });
 }
 ngOnInit() {
}
}
