import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlacestabPage } from './placestab.page';

const routes: Routes = [
  {
    path: '',
    component: PlacestabPage
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlacestabPageRoutingModule {}
