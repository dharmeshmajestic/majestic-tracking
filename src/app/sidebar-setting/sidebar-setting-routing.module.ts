import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SidebarSettingPage } from './sidebar-setting.page';

const routes: Routes = [
  {
    path: '',
    component: SidebarSettingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SidebarSettingPageRoutingModule {}
