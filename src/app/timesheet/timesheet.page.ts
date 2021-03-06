import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';
import { Timesheet } from './timesheet.model';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.page.html',
  styleUrls: ['./timesheet.page.scss'],
})
export class TimesheetPage implements OnInit {

  mymail: any;

  pipe = new DatePipe('en-US');
  now = Date.now();
  myFormattedDate = this.pipe.transform(this.now, 'short');

  timesheets: Timesheet[] = [
    {
      email: 'manasa.g@mca.christuniversity.in',
      dateDone: this.myFormattedDate,
      work: 'Done',
      timeSpent: 2,
      assignedBy: 'Varun'
    },
    {
      email: 'manasa.g@mca.christuniversity.in',
      dateDone: this.myFormattedDate,
      work: 'Done',
      timeSpent: 2,
      assignedBy: 'Varun'
    }
  ];

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { 
    this.mymail = loginService.getUser();
  }

  addTimesheet() {
    this.router.navigateByUrl('/timesheet/add');
  }

  ngOnInit() {
  }

}
