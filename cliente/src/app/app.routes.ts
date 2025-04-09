import { Routes } from '@angular/router';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';
import { EditarProductoComponent } from './components/editar-producto/editar-producto.component';

export const routes: Routes = [
    { path:'', component: ListarProductosComponent},
    { path: 'crear-producto', component: CrearProductoComponent },
    { path:'editar-producto/:id', component:EditarProductoComponent},
    { path: '**', redirectTo:'', pathMatch:'full' }
];

