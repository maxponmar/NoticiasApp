import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadoNoticiasPageRoutingModule } from './listado-noticias-routing.module';

import { ListadoNoticiasPage } from './listado-noticias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadoNoticiasPageRoutingModule
  ],
  declarations: [ListadoNoticiasPage]
})
export class ListadoNoticiasPageModule {}
