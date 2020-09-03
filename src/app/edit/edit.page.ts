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
  key:any;

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private formBuilder: FormBuilder
  ) {
    this.editForm = this.formBuilder.group({
      'id' : [null, Validators.required],
      'name' : [null, Validators.required],
      'email' : [null, Validators.required],
      'department' : [null, Validators.required],
      'position' : [null, Validators.required],
      'dob' : [null, Validators.required],
      'anniversary' : [null, Validators.required],
      'mobile' : [null, Validators.required],
      'joinDate' : [null, Validators.required],
    });
  //   this.route.queryParams.subscribe(params => {
  //     this.key = params["key"];
  //     // console.log(this.key);
  // });
  // this.getEmployeeInfo(this.key);
    this.getEmployeeInfo(this.route.snapshot.paramMap.get('key'));

   }

  ngOnInit() {
  }

  getEmployeeInfo(key) {
    firebase.database().ref('employees/'+key).on('value', resp => {
      // console.log(resp);
      let employee = snapshotToObject(resp);
      console.log(employee);
      this.editForm.controls['id'].setValue(employee.employeeId);
      this.editForm.controls['name'].setValue(employee.employeeName);
      this.editForm.controls['email'].setValue(employee.email);
      this.editForm.controls['department'].setValue(employee.department);
      this.editForm.controls['position'].setValue(employee.position);
      this.editForm.controls['dob'].setValue(employee.dob);
      this.editForm.controls['anniversary'].setValue(employee.anniversary);
      this.editForm.controls['mobile'].setValue(employee.mobile);
      this.editForm.controls['joinDate'].setValue(employee.joinDate);
    });
  }
  
  updateEmployee() {
    let newInfo = firebase.database().ref('employees/'+this.route.snapshot.paramMap.get('key')).update(this.editForm.value);
    this.router.navigate(['/detail/'+this.route.snapshot.paramMap.get('key')]);
  }

}

export const snapshotToObject = snapshot => {
  let item = snapshot.val();
  // console.log(snapshot);
  item.key = snapshot.key;
  return item;
}
