import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import {Router} from "@angular/router";
import {AngularFireDatabase} from "@angular/fire/database";
import {shareReplay} from "rxjs/operators";
<<<<<<< HEAD
import { LoadingController } from '@ionic/angular';
import * as firebase from 'firebase';
import { AlertController } from '@ionic/angular';
=======
>>>>>>> 4b91c281d2f336e2d039ba035411163177000743

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.page.html',
  styleUrls: ['./employees-list.page.scss'],
})
export class EmployeesListPage implements OnInit {

<<<<<<< HEAD
  employees = [];
  ref = firebase.database().ref('/employees');

  constructor(
    public router: Router, 
    public loadingController: LoadingController,
    public alertController: AlertController) {
    this.ref.on('value', resp => {
      this.employees = [];
      this.employees = snapshotToArray(resp);
    });
  }

  addEmployee() {
    this.router.navigate(['/register']);
  }

  edit(key) {
    this.router.navigate(['/edit/'+key]);
  }

  async delete(key) {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Are you sure want to delete this employee?',
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
            firebase.database().ref('employees/'+key).remove();
          }
        }
      ]
    });
  
    await alert.present();
=======
  constructor(
      private authObj: AngularFireAuth,
      private router: Router,
      private afdb: AngularFireDatabase
  ) {}

  ngOnInit() {
    this.fetchEmployees();
>>>>>>> 4b91c281d2f336e2d039ba035411163177000743
  }
  
  

  // constructor(
  //     private authObj: AngularFireAuth,
  //     private router: Router,
  //     private afdb: AngularFireDatabase
  // ) {}

<<<<<<< HEAD
  ngOnInit() {
    // this.fetchEmployees();
=======
  fetchEmployees() {
    const emp = this.afdb.object('employees').valueChanges().subscribe((data) => {
      console.log(data);
    });
    //console.log(emp);
    return emp;
>>>>>>> 4b91c281d2f336e2d039ba035411163177000743
  }


//original
  // fetchEmployees() {
  //   const emp = this.afdb.object('employees').valueChanges().subscribe((data) => {
  
  //     console.log(data);

  //   });
  //   //console.log(emp);
  //   return emp;
  // }

  
  // fetchEmployees() {
  //   this.itemsRef = this.afdb.list('employees');
  //   this.items = this.itemsRef.snapshotChanges().map(changes => {
  //     return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
  //   });
  // }

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