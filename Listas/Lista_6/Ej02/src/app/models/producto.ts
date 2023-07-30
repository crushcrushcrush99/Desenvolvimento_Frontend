export class Producto {
  public nombre: string;
  public descripcion: string;
  public imagen: string;
  public valor: number;
  public categoria: string;

  constructor(nombre: string, descripcion: string, imagen: string, valor: number, categoria: string) {
    this.nombre = nombre;
    this.descripcion = descripcion
    this.imagen = imagen;
    this.valor = valor;
    this.categoria = categoria;
  }
}
