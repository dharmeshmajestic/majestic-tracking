import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MembershiptabPageRoutingModule } from './membershiptab-routing.module';
import { MembershiptabPage } from './membershiptab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MembershiptabPageRoutingModule
  ],
  declarations: [MembershiptabPage]
})
export class MembershiptabPageModule {}
