import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoticiaDetallePageRoutingModule } from './noticia-detalle-routing.module';

import { NoticiaDetallePage } from './noticia-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoticiaDetallePageRoutingModule
  ],
  declarations: [NoticiaDetallePage]
})
export class NoticiaDetallePageModule {}
