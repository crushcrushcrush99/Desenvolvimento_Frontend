import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  AgregarProductoComponent(producto: new () => Producto) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) {}

  public getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>("http://localhost:8060/lista-productos");
  }

  public AgregarProducto(producto: Producto): Observable<string> {
    return this.http.post<string>("http://localhost:8060/agregar-producto", producto);
  }
}
