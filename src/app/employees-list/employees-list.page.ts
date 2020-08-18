import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.page.html',
  styleUrls: ['./employees-list.page.scss'],
})
export class EmployeesListPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  fetchEmployees() {
    this.http.get('')
  }

}
