import { Component } from '@angular/core';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent {

  accseso( event: any  ) {
    event.prevenDefault();
    console.log('hola')
    
  }

}
