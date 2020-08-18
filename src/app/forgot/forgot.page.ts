import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss'],
})
export class ForgotPage implements OnInit {

  email: any;

  constructor(
    private authObj: AngularFireAuth,
    private router: Router,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
  }
  
  
  reset() {
    if(this.email){
      this.authObj.sendPasswordResetEmail(this.email).then((r) => {
        this.toastCtrl.create({
          message: 'Mail sent for resetting you password',
          duration: 2000,
          position: 'bottom'
        }).then(res => res.present());
        this.router.navigateByUrl('/login');
      }).catch(e => {
        console.log(e);
      })
    }
  }
  

}
