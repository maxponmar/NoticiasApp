import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Noticia } from 'src/models/noticia.model';
import { NoticiasService } from '../noticias.service';
import { ListadoNoticiasPage } from '../listado-noticias/listado-noticias.page';

@Component({
  selector: 'app-noticia-detalle',
  templateUrl: './noticia-detalle.page.html',
  styleUrls: ['./noticia-detalle.page.scss'],
})
export class NoticiaDetallePage implements OnInit {

  noticia: Noticia;

  constructor(
    private Aroute: ActivatedRoute,   
    private noticiaService: NoticiasService) { }

  ngOnInit() {
    this.noticia = JSON.parse(this.Aroute.snapshot.params.noticia);
  }  

}
