import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SafetytabPageRoutingModule } from './safetytab-routing.module';


import { SafetytabPage } from './safetytab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
 
    SafetytabPageRoutingModule
  ],
  declarations: [SafetytabPage]
})
export class SafetytabPageModule {}
