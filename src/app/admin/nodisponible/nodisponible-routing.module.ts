import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NodisponiblePage } from './nodisponible.page';

const routes: Routes = [
  {
    path: '',
    component: NodisponiblePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NodisponiblePageRoutingModule {}
