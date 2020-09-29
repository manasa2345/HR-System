import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import {Router} from "@angular/router";
import {AngularFireDatabase} from "@angular/fire/database";
import {shareReplay} from "rxjs/operators";
import { LoadingController } from '@ionic/angular';
import * as firebase from 'firebase';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-asset',
  templateUrl: './asset.page.html',
  styleUrls: ['./asset.page.scss'],
})
export class AssetPage implements OnInit {

  assets = [];
  ref = firebase.database().ref('/assets');
  constructor(
    private authObj: AngularFireAuth,
    public router: Router, 
    public loadingController: LoadingController,
    public alertController: AlertController,
    public navCtrl: NavController) {
    this.ref.on('value', resp => {
      this.assets = [];
      this.assets = snapshotToArray(resp);
    }); 
  }

  addAsset() {
    this.router.navigate(['/create-asset']);
  }
  edit(key) {
    // let navigationExtras: NavigationExtras = {
    //   queryParams: {
    //       key: JSON.stringify(key)
    //   }
    // };
    // this.navCtrl.navigateForward(['edit'], navigationExtras);
   this.router.navigate(['/edit-asset/'+key]);
  }
  async delete(key) {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Are you sure want to delete this asset?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('cancel');
          }
        }, {
          text: 'Okay',
          handler: () => {
            firebase.database().ref('assets/'+key).remove();
          //   this.authObj.first().subscribe(authState => {
          //     authState.auth.delete()
          //        .then(_ => console.log('deleted!'));
          //        .catch(e => console.error(e));
          //  });
          }
        }
      ]
    });
  
    await alert.present();
  }
  ngOnInit() {
  }
  

}
export const snapshotToArray = snapshot => {
  let returnArr = [];

  snapshot.forEach(childSnapshot => {
      let item = childSnapshot.val();
      item.key = childSnapshot.key;
      returnArr.push(item);
  });

  return returnArr;
};
