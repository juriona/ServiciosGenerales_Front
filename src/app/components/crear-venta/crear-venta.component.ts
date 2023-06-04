import { Component } from '@angular/core';
import { VentaService } from 'src/app/services/venta.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { ProductoService } from 'src/app/services/producto.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-crear-venta',
  templateUrl: './crear-venta.component.html',
  styleUrls: ['./crear-venta.component.scss'],
  providers:[VentaService,ClienteService,ProductoService]
})
export class CrearVentaComponent {
  clientes: Array <any> = []
  productos:Array<any> = []
  cliente: any = {}
  venta: any ={productos:[]}
  constructor(private _ventaService: VentaService,private _clienteService: ClienteService,private _productoService: ProductoService, private router: Router){
    this.getClientes()
    this.getProductos()
  }

  getClientes()
  {
    this._clienteService.getListClientes().subscribe(
      (response) =>{
        this.clientes = response
      }
    )
  }
  getProductos(){

    this._productoService.getListProductos().subscribe(
      (response) => {

        this.productos = response

      }
    );
  }

  addCart(producto: any)
  {
    let new_product = {
      id: producto.id,
      nombre: producto.nombre,
      cantidad: producto.qty,
      precio: producto.precio
    }
    this.venta.productos.push(new_product)
  }

  total()
  {
    let total = 0
    this.venta.productos.forEach((item: any) => {
      total +=   parseFloat(item.precio) * parseFloat(item.cantidad)
    });
    return total
  }

  guardarVenta()
  {

    let list: Array<any> = []

    this.venta.productos.forEach((element:any) => {
      let product = {
        id : parseInt(element.id),
        cantidad: parseInt(element.cantidad)
      }
      list.push(product)

    });
    let payload ={
      total: this.total(),
      cliente: this.cliente,
      productos: list
    }
    this._ventaService.createVenta(payload).subscribe(
      (response)=>{

        console.log(response)
        this.router.navigate(['/ventas']);
      }
    )
  }
}
