// importar modulos del router de angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// importar componentes
import { HomeComponent } from './home/home.component';

import { CorteplasmaComponent } from './corteplasma/corteplasma.component';
import { FabricacionComponent } from './fabricacion/fabricacion.component';
import { ImplementacionComponent } from './implementacion/implementacion.component';
import { ImpresionComponent } from './impresion/impresion.component';
import { DisenioComponent } from './disenio/disenio.component';

import { BastidoresComponent } from './bastidores/bastidores.component';
import { StandComponent } from './stand/stand.component';

import { NosotrosComponent } from './nosotros/nosotros.component';
import { ContactoComponent } from './contacto/contacto.component';

import { ErrorComponent } from './error/error.component';


// array de rutas
const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'corteplasma', component: CorteplasmaComponent},
    {path: 'fabricacion', component: FabricacionComponent},
    {path: 'implementacion', component: ImplementacionComponent},
    {path: 'impresion', component: ImpresionComponent},
    {path: 'diseño', component: DisenioComponent},
    {path: 'bastidores', component: BastidoresComponent},
    {path: 'standpublicitario', component: StandComponent},
    {path: 'nosotros', component: NosotrosComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: '**', component: ErrorComponent}
];


// exportar modulo del router

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
