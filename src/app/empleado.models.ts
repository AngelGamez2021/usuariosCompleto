export class Empleado {
  id:number = 0;
  nombre: string = '';
  apellido: string = '';
  cargo: string = '';
  salario: number = 0;

  constructor(
    id: number,
    nombre: string,
    apellido: string,
    cargo: string,
    salario: number
  ) {

    this.id = 0;
    this.nombre = nombre;
    this.apellido = apellido;
    this.cargo = cargo;
    this.salario = salario;
  }
}
