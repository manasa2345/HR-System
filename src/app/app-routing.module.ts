import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { LoginGuard } from './login/login.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule), canLoad: [LoginGuard]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then( m => m.ChatPageModule), canLoad: [LoginGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule), canLoad: [LoginGuard]
  },
  {
    path: 'forgot',
    loadChildren: () => import('./forgot/forgot.module').then( m => m.ForgotPageModule), canLoad: [LoginGuard]
  },
  {
    path: 'employees-list',
    loadChildren: () => import('./employees-list/employees-list.module').then( m => m.EmployeesListPageModule), canLoad: [LoginGuard]
  },
  {
    path: 'edit/:key', loadChildren: './edit/edit.module#EditPageModule', canLoad: [LoginGuard] 
  },
  {
    path: 'detail/:key', loadChildren: './detail/detail.module#DetailPageModule', canLoad: [LoginGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
