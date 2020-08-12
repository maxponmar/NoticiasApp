import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Noticia } from 'src/models/noticia.model';
import { Autor } from 'src/models/autor.model';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {


  private API_LINK: string = "https://localhost:44317/api/noticia/";

  constructor( public http: HttpClient ) { }

  verNoticias(): Observable<Noticia[]> {
    return this.http.get<Noticia[]>(this.API_LINK + 'obtener');
  }

  obtenerAutores(): Observable<Autor[]> {
    return this.http.get<Autor[]>(this.API_LINK + 'autores');
  }

  eliminarNoticia(id: number): Observable<boolean> {
    return this.http.delete<boolean>(this.API_LINK + 'eliminar/' + id);
  } 

  agregarNoticia(noticia: Noticia): Observable<boolean> {
    return this.http.post<boolean>(this.API_LINK + "agregar", noticia);
  }

  editarNoticia(noticia: Noticia): Observable<boolean> {
    return this.http.put<boolean>(this.API_LINK + "editar", noticia);
  }
}
