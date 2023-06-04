import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { VentasComponent } from './components/ventas/ventas.component';
import { CrearVentaComponent } from './components/crear-venta/crear-venta.component';
import { HomeComponent } from './components/home/home.component';
const routes: Routes = [
  { path:'prueba/main',component:MainComponent },
  { path:'productos',component:ProductosComponent },
  { path:'clientes',component:ClientesComponent },
  { path:'ventas',component:VentasComponent },
  { path:'ventas/nuevo',component:CrearVentaComponent },
  { path:'home',component:HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
