import Funcionario from "./funcionario";

export default class Analista implements Funcionario{
  nombre: string;
  funcional: number;
  cargo: string;
  nombreGestor: string;

  constructor(nombre: string,
              funcional: number,
              cargo: string,
              nombreGestor: string)
  {
    this.nombre = nombre;
    this.funcional = funcional;
    this.cargo = cargo;
    this.nombreGestor = nombreGestor;
  }
}
