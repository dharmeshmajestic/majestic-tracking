import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FootertabPageRoutingModule } from './footertab-routing.module';

import { FootertabPage } from './footertab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FootertabPageRoutingModule
  ],
  declarations: [FootertabPage]
})
export class FootertabPageModule {}
