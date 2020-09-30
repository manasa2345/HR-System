import { NgModule } from '@angular/core';
import { PreloadAllModules,Routes, RouterModule } from '@angular/router';
import { LoginGuard } from '../login/login.guard';

import { AssetPage } from './asset.page';

const routes: Routes = [
  {
    path: '',
    component: AssetPage
  },
  {
    path: 'create-asset',
    loadChildren: () => import('./create-asset/create-asset.module').then( m => m.CreateAssetPageModule)
  },
  {
    path: 'edit-asset',
    loadChildren: () => import('./edit-asset/edit-asset.module').then( m => m.EditAssetPageModule)
  },
  {
    path: 'asset-details/:key',
    loadChildren: './asset-details/asset-details.module#AssetDetailsPageModule', canLoad:[LoginGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssetPageRoutingModule {}
