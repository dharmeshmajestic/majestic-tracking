import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  // },
  // {
  //   path: 'locationtab',
  //   loadChildren: () => import('./locationtab/locationtab.module').then( m => m.LocationtabPageModule)
  // },
  // {
  //   path: 'drivingtab',
  //   loadChildren: () => import('./drivingtab/drivingtab.module').then( m => m.DrivingtabPageModule)
  // },
  // {
  //   path: 'safetytab',
  //   loadChildren: () => import('./safetytab/safetytab.module').then( m => m.SafetytabPageModule)
  // },


  {
    path: '',
    loadChildren: () => import('./footertab/footertab.module').then( m => m.FootertabPageModule)
  },
  {
    path: 'maps',
    loadChildren: () => import('./maps/maps.module').then( m => m.MapsPageModule)
  }
 
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
