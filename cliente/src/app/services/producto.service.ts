import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private productos: Producto[] = [];
  constructor() { }

  agregarProducto(producto:Producto){
    this.productos.push(producto);
  }

  obtenerProductos(): Producto[] {
    return this.productos;
  }
}
