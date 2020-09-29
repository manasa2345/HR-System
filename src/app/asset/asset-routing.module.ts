import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssetPageRoutingModule {}
