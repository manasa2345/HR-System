import { Component, OnInit, Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators, FormArray } from '@angular/forms';
import { NavController } from '@ionic/angular';

import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  errorMessage: string = '';
  user:any = {};
  logoimg: any = "../assets/img/logo.png";


  constructor(
    private navCtrl: NavController,
    private formBuilder: FormBuilder,
    private authObj: AngularFireAuth,
    private loginService: LoginService,
    private router: Router
    ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ])),
    });
  }

  validation_messages = {
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Please enter a valid email.' }
    ],
    'password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 5 characters long.' }
    ]
  };



  login(value)
  {

    if(value.email && value.password) {
      // this.authObj
      
      this.authObj.signInWithEmailAndPassword(value.email, value.password).then( (res)=>{
        
        this.errorMessage = "";
        this.loginService.login();
        // this.navCtrl.navigateForward('/home');
        // alert(value.email);
        this.router.navigate(['/home/'+value.email]);
  
      }, e => {
        this.errorMessage = "Enter the correct details";
      })
    }
  }
  reset() {
    this.router.navigateByUrl('/forgot');
  }

}

