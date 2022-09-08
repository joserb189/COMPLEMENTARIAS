import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';


const routes: Routes = [
  {
    path: 'inicio', component: InicioComponent
  },
  {
    path: '/alumno', pathMatch: 'full' 
  },
  {
    path:'**', component: InicioComponent
  },
  {
    
  }
];

@NgModule({
  declarations:[],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
