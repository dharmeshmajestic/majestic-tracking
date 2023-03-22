import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SidebarSettingPageRoutingModule } from './sidebar-setting-routing.module';

import { SidebarSettingPage } from './sidebar-setting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SidebarSettingPageRoutingModule
  ],
  declarations: [SidebarSettingPage]
})
export class SidebarSettingPageModule {}
