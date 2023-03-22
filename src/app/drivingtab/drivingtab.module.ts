import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DrivingtabPageRoutingModule } from './drivingtab-routing.module';


import { DrivingtabPage } from './drivingtab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
   
    DrivingtabPageRoutingModule
  ],
  declarations: [DrivingtabPage]
})
export class DrivingtabPageModule {}
