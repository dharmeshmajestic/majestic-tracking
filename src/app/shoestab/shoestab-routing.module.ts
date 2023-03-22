import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoestabPage } from './shoestab.page';

const routes: Routes = [
  {
    path: '',
    component: ShoestabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoestabPageRoutingModule {}
