import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { ProductosComponent } from './components/productos/productos.component';
const routes: Routes = [
  { path:'prueba/main',component:MainComponent },
  { path:'productos',component:ProductosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
