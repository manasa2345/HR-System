import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { LoginGuard } from './login/login.guard';
import { LoginService } from './login/login.service';


const routes: Routes = [
  {
    path: 'home/:email',
    // loadChildren: () => import('./home/home.module').then( m => m.HomePageModule), canLoad: [LoginGuard]
    loadChildren: './home/home.module#HomePageModule',canLoad: [LoginGuard] 
  },
  {
    path: '',
    redirectTo: 'home/abc@ac.in',
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
    // loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule), canLoad: [LoginGuard]
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'forgot',
    loadChildren: () => import('./forgot/forgot.module').then( m => m.ForgotPageModule)
  },
  {
    path: 'employees-list',
    loadChildren: () => import('./employees-list/employees-list.module').then( m => m.EmployeesListPageModule), canLoad: [LoginGuard]
  },
  {
    path: 'edit/:key', 
    loadChildren: './edit/edit.module#EditPageModule', canLoad: [LoginGuard] 
  },
  {
    path: 'detail/:key', loadChildren: './detail/detail.module#DetailPageModule', canLoad: [LoginGuard]
  },
  {
    path: 'timesheet',
    loadChildren: () => import('./timesheet/timesheet.module').then( m => m.TimesheetPageModule), canLoad: [LoginGuard]
  },
  {
    path: 'asset',
    loadChildren: () => import('./asset/asset.module').then( m => m.AssetPageModule), canLoad: [LoginGuard]
  },
  {
    path: 'create-asset',
    loadChildren: () => import('./create-asset/create-asset.module').then( m => m.CreateAssetPageModule), canLoad: [LoginGuard]
  },
  {
    path: 'edit-asset/:key',
    loadChildren: './edit-asset/edit-asset.module#EditAssetPageModule', canLoad:[LoginGuard]
  },
  {
    path: 'asset-details/:key',
    loadChildren: './asset-details/asset-details.module#AssetDetailsPageModule', canLoad:[LoginGuard]
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
  // constructor(
  //   private loginService: LoginService
  // ){
  //   mail = loginService.getUser();
  // }
 }
