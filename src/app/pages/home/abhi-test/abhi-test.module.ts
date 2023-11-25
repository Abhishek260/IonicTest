import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AbhiTestPageRoutingModule } from './abhi-test-routing.module';

import { AbhiTestPage } from './abhi-test.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AbhiTestPageRoutingModule
  ],
  declarations: [AbhiTestPage]
})
export class AbhiTestPageModule {}
