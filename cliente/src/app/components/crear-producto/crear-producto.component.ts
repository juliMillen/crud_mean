import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Producto } from '../../models/producto';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-crear-producto',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './crear-producto.component.html',
  styleUrl: './crear-producto.component.css'
})
export class CrearProductoComponent implements OnInit{

  productoForm: FormGroup;
  titulo = 'Crear producto';
  id: string | null;


  constructor (private fb:FormBuilder, private route:Router, private productoService: ProductoService, private aRouter: ActivatedRoute){
    this.productoForm = fb.group({
      producto: ['',Validators.required],
      categoria: ['',Validators.required],
      ubicacion: ['',Validators.required],
      precio: ['',Validators.required]
    });
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
      this.esEditar();
  }

  agregarProducto() {
    console.log(this.productoForm);

    const producto: Producto = {
      nombre: this.productoForm.get('producto')?.value,
      categoria: this.productoForm.get('categoria')?.value,
      ubicacion: this.productoForm.get('ubicacion')?.value,
      precio: this.productoForm.get('precio')?.value
    }

    if(this.id !== null){
      //editar el producto
      this.productoService.editarProducto(this.id,producto).subscribe(data =>{
        console.log("Producto actualizado correctamente");
        this.route.navigate(['/']);
        
      }, error => {
        console.log("Error al intentar actualizar el producto" + error);
        this.productoForm.reset();
      })
    }else{
      //agrego el producto
      console.log(producto);
    this.productoService.agregarProducto(producto).subscribe(data => {
      console.log("Producto agregado correctamente");
      this.route.navigate(['/']);
    }, error => {
      console.log("Error al agregar el producto" + error);
      this.productoForm.reset();
    })
    }
    
  }

  esEditar(){
    if(this.id !== null){
      this.titulo = 'Editar Producto';
      this.productoService.obtenerProducto(this.id).subscribe(data => {
        this.productoForm.setValue({
          producto: data.nombre,
          categoria: data.categoria,
          ubicacion: data.ubicacion,
          precio: data.precio
        })
      })
    }
  }


}
