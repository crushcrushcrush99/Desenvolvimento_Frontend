import Funcionario from "./funcionario";

export default class Gestor implements Funcionario{
  nombre: string;
  funcional: number;
  cargo: string;
  nombreSubordinados: string[];

  constructor(nombre: string,
              funcional: number,
              cargo: string,
              nombreSubordinados: string[])
{
  this.nombre = nombre;
  this.funcional = funcional;
  this.cargo = cargo;
  this. nombreSubordinados = nombreSubordinados;
}

}
