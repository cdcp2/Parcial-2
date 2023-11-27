import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaConferenciasComponent } from './conferencias/lista-conferencias/lista-conferencias.component';
import { ConferenciasService } from './conferencias/conferencias.service';

@NgModule({
  declarations: [
    AppComponent,
    ListaConferenciasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ConferenciasService],
  bootstrap: [AppComponent]
})
export class AppModule { }