import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlacestabPageRoutingModule } from './placestab-routing.module';

import { PlacestabPage } from './placestab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlacestabPageRoutingModule
  ],
  declarations: [PlacestabPage]
})
export class PlacestabPageModule {}
