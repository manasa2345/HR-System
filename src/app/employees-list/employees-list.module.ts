import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmployeesListPageRoutingModule } from './employees-list-routing.module';

import { EmployeesListPage } from './employees-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmployeesListPageRoutingModule
  ],
  declarations: [EmployeesListPage]
})
export class EmployeesListPageModule {}
