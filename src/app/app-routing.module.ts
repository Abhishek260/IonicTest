import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'test',
    loadChildren: () => import('./pages/home/test/test.module').then( m => m.TestPageModule)
  },
  {
    path: 'toolbars',
    loadChildren: () => import('./pages/ui/toolbars/toolbars.module').then( m => m.ToolbarsPageModule)
  },  {
    path: 'profile-detail',
    loadChildren: () => import('./models/profile-detail/profile-detail.module').then( m => m.ProfileDetailPageModule)
  },

  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
