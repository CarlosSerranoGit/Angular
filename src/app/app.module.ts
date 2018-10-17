import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ProveedoresService } from './servicios/proveedores.service';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { InicioComponent } from './inicio/inicio.component';
import { Error404Component } from './error404/error404.component';
import { HeaderComponent } from './header/header.component';
import { AddproveeComponent } from './addprovee/addprovee.component';
import { FormsModule } from '@angular/forms';
import { AddpresComponent } from './addpres/addpres.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PresupuestosService } from './servicios/presupuestos.service';
import { PresupuestosComponent } from './presupuestos/presupuestos.component';
import { EditpresComponent } from './editpres/editpres.component';
import { RegistroComponent } from './autenticacion/registro/registro.component';
import { AutenticacionService } from './servicios/autenticacion.service';
import { InisesComponent } from './autenticacion/inises/inises.component';
import {GuardService} from './servicios/guard.service';

const routes: Routes = [
  { path: '', component: InicioComponent },
 { path: 'proveedores', component: ProveedoresComponent, canActivate:
[GuardService]},
 { path: 'addprovee', component: AddproveeComponent, canActivate:
[GuardService]},
 { path: 'addpres', component: AddpresComponent, canActivate:
[GuardService]},
 { path: 'presupuestos', component: PresupuestosComponent, canActivate:
[GuardService]},
 { path: 'editpres/:id', component: EditpresComponent, canActivate:
[GuardService]},
 { path: 'registro', component: RegistroComponent },
 { path: 'iniciosesion', component: InisesComponent },
  { path: '**', component: Error404Component }
  ];

@NgModule({
  
  declarations: [
    AppComponent,
    ProveedoresComponent,
    InicioComponent,
    Error404Component,
    HeaderComponent,
    AddproveeComponent,
    AddpresComponent,
    PresupuestosComponent,
    EditpresComponent,
    RegistroComponent,
    InisesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    RouterModule.forRoot(routes),
    HttpModule
  ],
  providers: [ProveedoresService,PresupuestosService,AutenticacionService,GuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
