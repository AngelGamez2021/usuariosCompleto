import { Component, Input, OnInit } from '@angular/core';
import { Empleado } from '../empleado.models';

@Component({
  selector: 'app-empleado-hijo',
  templateUrl: './empleado-hijo.component.html',
  styleUrls: ['./empleado-hijo.component.css'],
})
export class EmpleadoHijoComponent implements OnInit {
  
  @Input() empleados: any[] = [];
  @Input() title: any = '';

   
  constructor() {}

  ngOnInit(): void {
    console.log(this.empleados);
  }

 
  // eliminar(){
    
  // }


}
