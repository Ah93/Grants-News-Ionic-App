import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GrantsDetailsHomePage } from './grants-details-home.page';

const routes: Routes = [
  {
    path: '',
    component: GrantsDetailsHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GrantsDetailsHomePageRoutingModule {}
