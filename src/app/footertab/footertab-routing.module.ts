import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FootertabPage } from './footertab.page';

const routes: Routes = [
  {
    path: '',
    component: FootertabPage,
    children:[
      {
        path: 'locationtab',
        loadChildren: () => import('../locationtab/locationtab.module').then( m => m.LocationtabPageModule)
      },
      {
        path: 'drivingtab',
        loadChildren: () => import('../drivingtab/drivingtab.module').then( m => m.DrivingtabPageModule)
      },
      {
        path: 'safetytab',
        loadChildren: () => import('../safetytab/safetytab.module').then( m => m.SafetytabPageModule)
      },
      {
        path: 'membershiptab',
        loadChildren: () => import('../membershiptab/membershiptab.module').then( m => m.MembershiptabPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FootertabPageRoutingModule {}
