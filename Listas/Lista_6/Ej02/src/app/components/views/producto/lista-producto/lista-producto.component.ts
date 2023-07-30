import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista-producto.component.html',
  styleUrls: ['./lista-producto.component.css']
})
export class ListaProductoComponent implements OnInit {

  constructor(private productoService: ProductoService) {}

  public productos!: Producto[];

  ngOnInit(): void {
    this.productoService.getProductos().subscribe((response: Producto[]) => {
      this.productos = response
    });
  }
}
