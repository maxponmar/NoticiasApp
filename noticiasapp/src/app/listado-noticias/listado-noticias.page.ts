import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../noticias.service';
import { Noticia } from 'src/models/noticia.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado-noticias',
  templateUrl: './listado-noticias.page.html',
  styleUrls: ['./listado-noticias.page.scss'],
})
export class ListadoNoticiasPage implements OnInit {
  noticias: Noticia[];
  constructor(
    private noticiasService: NoticiasService,
    private router: Router) { }

  ngOnInit() {
    this.noticiasService.verNoticias().subscribe((_noticias)=> {
      this.noticias = _noticias;
    }, error => {
      this.noticias = [];
    });
  }

  AbrirDetalle(noticia: Noticia) {
    this.router.navigate(['noticia-detalle', {noticia: JSON.stringify(noticia)}]);
  }

  eliminar(id : number, index: number) {
    this.noticiasService.eliminarNoticia(id).subscribe(()=>{
      this.noticias.splice(index,1);
    }, error => {
      console.log("Error");
    });        
  }

  editar(noticiaP: Noticia) {
    this.router.navigate(['/agregar', {noticia: JSON.stringify(noticiaP)}]);
  }

}
