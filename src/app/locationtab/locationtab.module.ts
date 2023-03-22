import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocationtabPageRoutingModule } from './locationtab-routing.module';

import { LocationtabPage } from './locationtab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  
    LocationtabPageRoutingModule
  ],
  declarations: [LocationtabPage]
})
export class LocationtabPageModule {}
