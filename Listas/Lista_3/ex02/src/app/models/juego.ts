export class Juego {
  _id: string;
  nombre: string;
  genero: string;
  fechaLanzamiento: string;
  desarrollador: string;
  imagen: string;

  constructor(_id: string,
              nombre: string,
              genero: string,
              fechaLanzamiento: string,
              desarrollador: string,
              imagen: string)
  { this._id = _id;
    this.nombre = nombre;
    this.genero = genero;
    this.fechaLanzamiento = fechaLanzamiento;
    this.desarrollador = desarrollador;
    this.imagen = imagen;
  }
}
