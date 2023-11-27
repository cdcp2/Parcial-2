import { Component, OnInit, Input } from '@angular/core';
import { Conferencias } from '../conferencia.model';

@Component({
  selector: 'app-conferencia-detalle',
  templateUrl: './conferencia-detalle.component.html',
  styleUrls: ['./conferencia-detalle.component.css']
})
export class ConferenciaDetalleComponent implements OnInit {
  @Input() conferencia: Conferencias | null = null;

  constructor() { }

  ngOnInit() {
  }

}
