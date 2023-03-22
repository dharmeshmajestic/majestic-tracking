import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShoestabPageRoutingModule } from './shoestab-routing.module';

import { ShoestabPage } from './shoestab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShoestabPageRoutingModule
  ],
  declarations: [ShoestabPage]
})
export class ShoestabPageModule {}
