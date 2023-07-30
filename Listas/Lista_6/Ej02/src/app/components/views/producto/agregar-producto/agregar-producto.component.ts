import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent {
  public nombreDelProducto!: string;
  public descripcionDelProducto!: string;
  public imagenDelProducto!: string;
  public valorDelProducto!: number;
  public categoriaDelProducto!: string;

  constructor(private productoService: ProductoService, private router: Router){}

  public agregarProducto(){
      let producto = new Producto(this.nombreDelProducto,
                                 this.descripcionDelProducto,
                                 this.imagenDelProducto,
                                 this.valorDelProducto,
                                 this.categoriaDelProducto);
    this.productoService.AgregarProducto(producto).subscribe((response) => {
      console.log(response);
    });
    this.router.navigate(["/"])
    }
  }


