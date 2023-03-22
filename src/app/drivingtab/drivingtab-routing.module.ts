import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DrivingtabPage } from './drivingtab.page';

const routes: Routes = [
  {
    path: '',
    component: DrivingtabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DrivingtabPageRoutingModule {}
