import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadoNoticiasPage } from './listado-noticias.page';

const routes: Routes = [
  {
    path: '',
    component: ListadoNoticiasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListadoNoticiasPageRoutingModule {}
