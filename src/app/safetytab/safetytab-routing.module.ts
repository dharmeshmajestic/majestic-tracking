import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SafetytabPage } from './safetytab.page';

const routes: Routes = [
  {
    path: '',
    component: SafetytabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SafetytabPageRoutingModule {}
