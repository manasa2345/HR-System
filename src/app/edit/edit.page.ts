import { Component, OnInit } from '@angular/core';
import * as firebase from 'Firebase';
import { ActivatedRoute, Router  } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  ref = firebase.database().ref('/employees');
  editForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
  }

  // getInfo(key) {
  //   firebase.database().ref('employees/'+key).on('value', resp => {
  //     let employee = snapshotToObject(resp);
  //     this.editForm.controls['id'].setValue(employee.employeeId);
  //     this.editForm.controls['name'].setValue(employee.employeeName);
  //     this.editForm.controls['email'].setValue(employee.email);
  //     this.editForm.controls['department'].setValue(employee.department);
  //     this.editForm.controls['position'].setValue(employee.position);
  //     this.editForm.controls['dob'].setValue(employee.dob);
  //     this.editForm.controls['anniversary'].setValue(employee.anniversary);
  //     this.editForm.controls['mobile'].setValue(employee.phone);
  //     this.editForm.controls['joinDate'].setValue(employee.joinDate);
  //   });
  // }
  

}
