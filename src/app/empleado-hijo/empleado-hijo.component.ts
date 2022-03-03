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

  eliminar(id: number) {
    //  this.empleados = this.empleados.filter((empleado) => empleado.id !== id);

    //aca recibimos el id en la funcion del boton  empleado.id

    const found = this.empleados.find((element) => element.id === id);
    //creamos una variable que recorrerá e array original, creamos element y le pasamos
    //el id, si este es igual al id entonces encuentra el array
    const index = this.empleados.indexOf(found);
    // aca almacenamos en el idex la variable encontrada con el indexOF en index
    this.empleados.splice(index, 1);
    // dentro del array quitaremos ese dato encontrado, en un rango de un solo dato,
    //o sea quitará uno solo
    console.log(this.empleados);
    console.log(found);
  }

  editar(id: number) {

    const found = this.empleados.find((element) => element.id === id);
    const index = this.empleados.indexOf(found);
    

  }

  // eliminar(){

  // }
}
