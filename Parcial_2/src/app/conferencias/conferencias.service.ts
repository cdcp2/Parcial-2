import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Conferencias } from './conferencia.model';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConferenciasService {
  private defaultUrl = 'https://gist.githubusercontent.com/k-garces/d2ea7b6ba0a5502a7856f10b1cd1e032/raw/47bcf9b71199defa5539bb8122ae2da01e721afe/conferences.json';

  constructor(private http: HttpClient) {}

  getConferencias(jsonUrl = this.defaultUrl): Observable<Conferencias[]> {
    return this.http.get<Conferencias[]>(jsonUrl).pipe(
      tap((conferencias: Conferencias[]) => {
        console.log(conferencias); // Agrega esto para verificar los datos
      }),
      tap((conferencias: Conferencias[]) => {
        console.log(conferencias); // Agrega esto para verificar los datos
      })
    );
  }
}