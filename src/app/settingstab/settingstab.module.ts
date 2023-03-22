import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SettingstabPageRoutingModule } from './settingstab-routing.module';

import { SettingstabPage } from './settingstab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SettingstabPageRoutingModule
  ],
  declarations: [SettingstabPage]
})
export class SettingstabPageModule {}
