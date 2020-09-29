import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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
  const now = Date.now();
  const myFormattedDate = this.pipe.transform(this.now, 'short');

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
    private loginService: LoginService
  ) { 
    this.mymail = loginService.getUser();
  }

  ngOnInit() {
  }

}
