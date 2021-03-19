import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BastidoresComponent } from './bastidores/bastidores.component';
import { DisenioComponent } from './disenio/disenio.component';
import { CorteplasmaComponent } from './corteplasma/corteplasma.component';
import { FabricacionComponent } from './fabricacion/fabricacion.component';
import { ImplementacionComponent } from './implementacion/implementacion.component';
import { ImpresionComponent } from './impresion/impresion.component';
import { StandComponent } from './stand/stand.component';
import { ErrorComponent } from './error/error.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ContactoComponent } from './contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BastidoresComponent,
    DisenioComponent,
    CorteplasmaComponent,
    FabricacionComponent,
    ImplementacionComponent,
    ImpresionComponent,
    StandComponent,
    ErrorComponent,
    NosotrosComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    routing,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [appRoutingProviders, { provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
