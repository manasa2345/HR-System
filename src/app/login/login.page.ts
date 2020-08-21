import { Component, OnInit, Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators, FormArray } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  errorMessage: string = '';
  user:any = {};


  constructor(
    private navCtrl: NavController,
    private formBuilder: FormBuilder,
    private authObj: AngularFireAuth,
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
        this.navCtrl.navigateForward('/home');
  
      }, e => {
        this.errorMessage = "Enter the correct details";
      })
    }
  }
  reset() {
    this.router.navigateByUrl('/forgot');
  }

}

