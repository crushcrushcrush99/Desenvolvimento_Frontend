export class Animal{
  public _id!: string;
  public nome: string;
  public raca: string;
  public peso: number;
  public foto: string;

  constructor(nome: string,
              raca: string,
              peso: number,
              foto: string)
  {
    this.nome= nome;
    this.raca= raca;
    this.peso= peso;
    this.foto= foto;
  }
}
