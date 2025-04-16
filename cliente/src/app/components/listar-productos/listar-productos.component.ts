import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Producto } from '../../models/producto';
import { ProductoService } from '../../services/producto.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listar-productos',
  imports: [RouterModule,CommonModule],
  templateUrl: './listar-productos.component.html',
  styleUrl: './listar-productos.component.css'
})
export class ListarProductosComponent implements OnInit {

  productos: Producto [] = [];

  constructor(private productoService: ProductoService){

  }

  ngOnInit(): void {
    this.obtenerProductos();
  }

  obtenerProductos(){
    this.productoService.obtenerProductos().subscribe(data => {
      console.log(data);
      this.productos = data;
    }, error =>{
      console.log(error);
    })
  }

  eliminarProducto(id:any) {
    this.productoService.eliminarProducto(id).subscribe(data =>{
      console.log("Producto eliminado correctamente");
      this.obtenerProductos();
    }, error => {
      console.log(error);
    })
  }
}
