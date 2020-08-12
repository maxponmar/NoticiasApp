import { Component, OnInit } from '@angular/core';
import { Autor } from 'src/models/autor.model';
import { NoticiasService } from '../noticias.service';
import { Noticia } from 'src/models/noticia.model';
import { LoadingController, ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  autores: Autor[];
  noticia: Noticia = new Noticia();
  editable: boolean = true;

  constructor(
    private noticiasService: NoticiasService,
    public loadingController: LoadingController,
    private toast: ToastController,
    private aroute: ActivatedRoute) { }

  ngOnInit() {
    if( this.aroute.snapshot.params.noticia != undefined) {
      this.noticia = new Noticia(JSON.parse(this.aroute.snapshot.params.noticia));
      this.editable = true;      
    } else {
      this.editable = false;
    }
    
    this.noticiasService.obtenerAutores().subscribe(data => {
      this.autores = data;
    });
  }

  async guardar(){
    const loading = await this.loadingController.create({      
      message: 'Guardando Noticia...',      
    });
    await loading.present();

    this.noticiasService.agregarNoticia(this.noticia).subscribe(()=>{ 
      loading.dismiss();
      this.mostrarMensaje("Noticia guardada exitosamente!");
      this.noticia = new Noticia(null);
    }, error => {
      loading.dismiss();
      this.mostrarMensaje("Ocurrio un error, porfavor verifica la informacion");
    });
  }

  async mostrarMensaje(mensaje: string) {
    const toast = await this.toast.create({
      message: mensaje,
      duration: 2000
    });
    toast.present();
  }

  async editar(){
    const loading = await this.loadingController.create({      
      message: 'Guardando Cambios...',      
    });
    await loading.present();

    this.noticiasService.editarNoticia(this.noticia).subscribe(()=>{ 
      loading.dismiss();
      this.mostrarMensaje("Noticia actualizada exitosamente!");      
    }, error => {
      loading.dismiss();
      this.mostrarMensaje("Ocurrio un error, porfavor verifica la informacion");
    });
  }


}
