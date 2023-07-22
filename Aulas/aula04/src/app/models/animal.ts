export class Animal{
  public _id!: string;
  public nome: string;
  public raca: string;
  public peso: number;

  constructor(nome: string,
              raca: string,
              peso: number)
  {
    this.nome= nome;
    this.raca= raca;
    this.peso= peso;
  }
}
