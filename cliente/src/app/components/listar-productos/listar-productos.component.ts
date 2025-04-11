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

  constructor(private productoSerivce: ProductoService){

  }

  ngOnInit(): void {
      this.productos = this.productoSerivce.obtenerProductos();
  }
}
