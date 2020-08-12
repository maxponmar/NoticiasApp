import { Autor } from './autor.model';

export interface Noticia {
    noticiaID: number;
    titulo: string;
    descripcion: string;
    contenido: string;
    fecha: Date;
    autorID: number;
    autor: Autor;
}

export class Noticia{
    noticiaID: number;
    titulo: string;
    descripcion:string;
    contenido:string;
    fecha: Date;
    autorID:number;
    autor: Autor

    constructor(datos?: Noticia){
        if(datos != null)
        {
            this.noticiaID = datos.noticiaID;
            this.titulo = datos.titulo;
            this.descripcion = datos.descripcion;
            this.contenido = datos.contenido;
            this.fecha = datos.fecha;
            this.autorID = datos.autorID;
            this.autor = datos.autor;
            return
        }
        this.noticiaID = this.noticiaID;
        this.titulo = this.titulo;
        this.descripcion = this.descripcion;
        this.contenido = this.contenido;
        this.fecha = this.fecha;
        this.autorID = this.autorID;
        this.autor = this.autor;
    }
}
