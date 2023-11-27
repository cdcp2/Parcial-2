import { Component, OnInit } from '@angular/core';
import { ConferenciasService } from '../conferencias.service';
import { Conferencias } from '../conferencia.model';

@Component({
  selector: 'app-lista-conferencias',
  templateUrl: './lista-conferencias.component.html',
  styleUrls: ['./lista-conferencias.component.css']
})
export class ListaConferenciasComponent implements OnInit {
  listaConferencias: Conferencias[] = [];
  conferenciaDetalle: Conferencias | null = null;

  constructor(private conferenciasService: ConferenciasService) {}

  ngOnInit(): void {
    this.conferenciasService.getConferencias().subscribe((conferencias) => {
      this.listaConferencias = conferencias;
    });
  }

  activarDetalle(id: number) {
    this.conferenciaDetalle = this.listaConferencias.find(conferencia => conferencia.id === id) || null;
  }
}