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
        path: 'shoestab',
        loadChildren: () => import('../shoestab/shoestab.module').then( m => m.ShoestabPageModule)
      },
      {
        path: 'placestab',
        loadChildren: () => import('../placestab/placestab.module').then( m => m.PlacestabPageModule)
      },
      {
        path: 'settingstab',
        loadChildren: () => import('../settingstab/settingstab.module').then( m => m.SettingstabPageModule)
      },
    ]

  },
  {
    path: '',
    redirectTo: '/locationtab/',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FootertabPageRoutingModule {}
