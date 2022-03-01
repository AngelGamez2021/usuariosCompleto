import { Component, EventEmitter, OnInit,Output } from '@angular/core';

@Component({
  selector: 'app-caracteristicas',
  templateUrl: './caracteristicas.component.html',
  styleUrls: ['./caracteristicas.component.css']
})
export class CaracteristicasComponent implements OnInit {

  @Output() caracteristicasEmpleados = new EventEmitter<{}>();

  constructor() { }

  ngOnInit(): void {
  }

  agregarCaracteristicas(value: string){

  this.caracteristicasEmpleados.emit(value)

  }

}
