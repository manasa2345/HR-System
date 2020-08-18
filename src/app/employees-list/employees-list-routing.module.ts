import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeesListPage } from './employees-list.page';

const routes: Routes = [
  {
    path: '',
    component: EmployeesListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeesListPageRoutingModule {}
