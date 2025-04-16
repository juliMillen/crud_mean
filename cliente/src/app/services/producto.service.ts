import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  url = 'http://localhost:4000/api/productos/';

  private productos: Producto[] = [];

  constructor( private http:HttpClient) { }

  agregarProducto(producto:Producto): Observable<any>{
    return this.http.post(this.url, producto);
  }

  obtenerProductos(): Observable<any> {
    return this.http.get(this.url)
  }

  obtenerProducto(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  eliminarProducto(id:string): Observable<any>{
    return this.http.delete(this.url + id);
  }

  editarProducto(id:string, producto:Producto): Observable<any> {
    return this.http.put(this.url + id, producto);
  }

}
