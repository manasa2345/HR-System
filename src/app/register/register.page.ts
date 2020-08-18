import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase} from '@angular/fire/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  employee:any = {};


  constructor(
    private authObj: AngularFireAuth,
    private router: Router,
    private afdb: AngularFireDatabase 
    ) {}

  ngOnInit() {
  }

  register() {

    if(this.employee.email && this.employee.password){
      this.authObj.createUserWithEmailAndPassword(this.employee.email, this.employee.password).then( (r) => {
        console.log(r);
        console.log("created");

        this.afdb.object('employees/' + r.user.uid).set({
          employeeId: this.employee.id,
          employeeName: this.employee.name,
          department: this.employee.department,
          position: this.employee.position,
          dob: this.employee.dob,
          email: this.employee.email,
          phone: this.employee.mobile,
          anniversary: this.employee.anni,
          joinDate: this.employee.join
        }).then( ()=>{
          this.router.navigateByUrl('/home');
        });

      }).catch(e => {
        console.log(e);
      })




    }
  }

}
