import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoticiaDetallePage } from './noticia-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: NoticiaDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoticiaDetallePageRoutingModule {}
