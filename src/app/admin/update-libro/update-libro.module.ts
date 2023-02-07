import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateLibroPageRoutingModule } from './update-libro-routing.module';

import { UpdateLibroPage } from './update-libro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateLibroPageRoutingModule
  ],
  declarations: [UpdateLibroPage]
})
export class UpdateLibroPageModule {}
