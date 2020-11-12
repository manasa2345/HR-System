import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase} from '@angular/fire/database';
import { ActivatedRoute, Router } from '@angular/router';
import * as firebase from 'Firebase';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators, FormArray } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  ref = firebase.database().ref('/employees');
  registerForm: FormGroup;

  employee:any = {};


  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private authObj: AngularFireAuth,
    private router: Router,
    private afdb: AngularFireDatabase,
    private formBuilder: FormBuilder,
    private datePipe: DatePipe
    ) {
      this.registerForm = this.formBuilder.group({
        'id' : [null, Validators.required],
        'name' : [null, Validators.required],
        'email' : [null, Validators.required],
        'password' : [null, Validators.required],
        'department' : [null, Validators.required],
        'position' : [null, Validators.required],
        'dob' : [null, Validators.required],
        'mobile' : [null, Validators.required],
        'joinDate' : [null, Validators.required],
        'anniversary' : [null, Validators.required]
      });
    }

  ngOnInit() {
  }

  //original
  // register() {

  //   if(this.employee.email && this.employee.password){
  //     this.authObj.createUserWithEmailAndPassword(this.employee.email, this.employee.password).then( (r) => {
  //       console.log(r);
  //       console.log("created");

  //       this.afdb.object('employees/' + r.user.uid).set({
  //         employeeId: this.employee.id,
  //         employeeName: this.employee.name,
  //         department: this.employee.department,
  //         position: this.employee.position,
  //         dob: this.employee.dob,
  //         email: this.employee.email,
  //         phone: this.employee.mobile,
  //         anniversary: this.employee.anni,
  //         joinDate: this.employee.join
  //       }).then( ()=>{
  //         this.router.navigateByUrl('/home');
  //       });

  //     }).catch(e => {
  //       console.log(e);
  //     })
  //   }
  // }

  register(value) {
    // alert('hi');

    value.dob = this.datePipe.transform(value.dob, 'yyyy-MM-dd');
    value.anniversary = this.datePipe.transform(value.anniversary, 'yyyy-MM-dd');
    value.joinDate = this.datePipe.transform(value.joinDate, 'yyyy-MM-dd');
    
      this.authObj.createUserWithEmailAndPassword(value.email, value.password).then( (r) => {
        console.log(r);
        console.log("created");


        this.afdb.object('employees/' + r.user.uid).set({
          employeeId: value.id,
          employeeName: value.name,
          department: value.department,
          position: value.position,
          dob: value.dob,
          email: value.email,
          mobile: value.mobile,
          anniversary: value.anniversary,
          joinDate: value.joinDate
        }).then( ()=>{
          // this.router.navigateByUrl('/home');
          // this.navCtrl.navigateForward('/home');
          this.router.navigate(['/detail/'+r.user.uid]);
        });
        // this.router.navigate(['/home/'+newEmployee.key]);
      }).catch(e => {

        console.log(e);
      })
    
  }

}