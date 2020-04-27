import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GrantsDetailsHomePageRoutingModule } from './grants-details-home-routing.module';

import { GrantsDetailsHomePage } from './grants-details-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GrantsDetailsHomePageRoutingModule
  ],
  declarations: [GrantsDetailsHomePage]
})
export class GrantsDetailsHomePageModule {}
