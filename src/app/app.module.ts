import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioModule } from './paginas/inicio/inicio.module';
import { AlumnoModule } from './paginas/alumno/alumno.module';
import { HeaderModule } from './paginas/header/header.module';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InicioModule,
    AlumnoModule,
    HeaderModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
