import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NodisponiblePageRoutingModule } from './nodisponible-routing.module';

import { NodisponiblePage } from './nodisponible.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NodisponiblePageRoutingModule
  ],
  declarations: [NodisponiblePage]
})
export class NodisponiblePageModule {}
