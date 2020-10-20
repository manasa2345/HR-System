import { NgModule } from '@angular/core';
import { PreloadAllModules,Routes, RouterModule } from '@angular/router';
import { LoginGuard } from '../login/login.guard';

import { AssetPage } from './asset.page';

const routes: Routes = [
  {
    path: '',
    component: AssetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssetPageRoutingModule {}
