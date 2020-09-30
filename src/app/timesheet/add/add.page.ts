import { Component, NgModule, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase} from '@angular/fire/database';
import { ActivatedRoute, Router } from '@angular/router';
import * as firebase from 'Firebase';
import { ReactiveFormsModule, FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators, FormArray } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { LoginService } from 'src/app/login/login.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})

@NgModule({
  imports: [ReactiveFormsModule]
})
export class AddPage implements OnInit {

  email: any;
  ref: any;
  timesheetForm: FormGroup;


  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private authObj: AngularFireAuth,
    private router: Router,
    private afdb: AngularFireDatabase,
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private reactiveFormModule: ReactiveFormsModule
    ) {
      this.email = loginService.getUser();
      this.timesheetForm = this.formBuilder.group({
        'email' : [null, Validators.required],
        'date' : [null, Validators.required],
        'work' : [null, Validators.required],
        'timeSpent' : [null, Validators.required],
        'assignedBy' : [null, Validators.required]
      });
    }

  ngOnInit() {
  }

  addTimesheet(value) {
    this.ref = firebase.database().ref('/timesheet/'+ this.email +'/');
    let newTimesheet = this.ref.push();
    newTimesheet.set(this.timesheetForm.value);
    this.router.navigate(['/timesheet/']);
    
  }

}

