import { Component } from '@angular/core';
import { Empleado } from './empleado.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Listado de empleados';

  empleados: Empleado[] = [
    new Empleado(1, 'Angel', 'Gamez', 'Ingeniero', 1500000),
    new Empleado(2, 'Genaro', 'Gamez', 'Comunicador', 1200000),
    new Empleado(3, 'Jossie', 'Gamez', 'Abogado', 1000000),
  ];

  cuadroId: number = 0;
  cuadroNombre: string = '';
  cuadroApellido: string = '';
  cuadroCargo: string = '';
  cuadroSalario: number = 0;

  // aca creamos una variable que contenga lo que ya tenemos  guardado en las cajitas de cuadro
  registrar() {
    let miEmpleado = new Empleado(
      this.cuadroId,
      this.cuadroNombre,
      this.cuadroApellido,
      this.cuadroCargo,
      this.cuadroSalario
    );

    this.empleados.push(miEmpleado);
  }

  arrayCaracteristicas = [''];

  agregarCaracteristicas(nuevaCaracteristicas: string) {
    this.arrayCaracteristicas.push(nuevaCaracteristicas);
  }

  // eliminar(id: number) {

  //   console.log(id);

  //   this.empleados = this.empleados.filter((empleado) => empleado.id !== id);

  // }

  //
}
