import { Component } from '@angular/core';
import { DataSnapshot } from '@angular/fire/database/interfaces';
import { ActivatedRoute, Router } from '@angular/router';
import * as firebase from 'Firebase';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  static email;
  static readonly emailConsistent: string; 

  ref = firebase.database().ref('/employees');
  correctEmployee = {};
  // employee = {}
  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private loginService: LoginService
  )
  {
    HomePage.email = this.route.snapshot.paramMap.get('email');
    // HomePage.emailConsistent = HomePage.email;
    this.getEmployeeInfo(HomePage.email);
  }

  getEmployeeInfo(email) {
    console.log(HomePage.emailConsistent);
    this.loginService.user = email;
  //   firebase.database().ref('employees/').orderByChild('email').equalTo(email).on('value', resp => {
  //     resp.forEach(childSnapshot => {
  //       let employee = snapshotToObject(resp);
  //       console.log('hello');
  //       console.log(employee);
  //       // var childData = childSnapshot.val();
  //       // console.log('hi');
  //       // console.log(childData);
  //     });
  //   });
  // }
    firebase.database().ref('/employees')
    .on('value',(data: DataSnapshot) => {
      data.forEach((child: DataSnapshot) => {
        // console.log(child.key, child.val());
        let emp = child.val();
        // console.log(emp);
        if(emp.email == email){
          this.correctEmployee = emp;
          // alert(this.correctEmployee.name);
        }
      });
    });

  }
}

export const snapshotToObject = snapshot => {
  let item = snapshot.val();
  // console.log(snapshot);
  item.key = snapshot.key;
  return item;
}
