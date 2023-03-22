import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocationtabPage } from './locationtab.page';

const routes: Routes = [
  {
    path: '',
    component: LocationtabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocationtabPageRoutingModule {}
