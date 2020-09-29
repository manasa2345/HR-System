import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateAssetPageRoutingModule } from './create-asset-routing.module';

import { CreateAssetPage } from './create-asset.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CreateAssetPageRoutingModule
  ],
  declarations: [CreateAssetPage]
})
export class CreateAssetPageModule {}
