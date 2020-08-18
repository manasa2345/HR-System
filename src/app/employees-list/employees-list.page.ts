import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import {Router} from "@angular/router";
import {AngularFireDatabase} from "@angular/fire/database";
import {shareReplay} from "rxjs/operators";

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.page.html',
  styleUrls: ['./employees-list.page.scss'],
})
export class EmployeesListPage implements OnInit {

  constructor(
      private authObj: AngularFireAuth,
      private router: Router,
      private afdb: AngularFireDatabase
  ) {}

  ngOnInit() {
    this.fetchEmployees();
  }

  fetchEmployees() {
    const emp = this.afdb.object('employees').valueChanges().subscribe((data) => {
      console.log(data);
    });
    //console.log(emp);
    return emp;
  }

}
