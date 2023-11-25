import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AbhiTestPage } from './abhi-test.page';

const routes: Routes = [
  {
    path: '',
    component: AbhiTestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AbhiTestPageRoutingModule {}
