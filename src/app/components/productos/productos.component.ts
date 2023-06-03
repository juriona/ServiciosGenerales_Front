import { Component } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
  providers: [ProductoService]
})
export class ProductosComponent {

  productos:Array<any> = []
  dialog: Boolean = false
  nombre: String = ''
  precio: Number = 0
  cantidad: Number = 0
  categoria: String = ''
  id:Number = 0


  constructor(private _productoService: ProductoService){
    this.getProductos()
  }

  getProductos(){

    this._productoService.getListProductos().subscribe(
      (response) => {

        this.productos = response

      }
    );
  }

  crearProducto()
  {
    this.dialog = true
    this.clearProducto()
  }

  clearProducto()
  {
    this.nombre = ''
    this.precio = 0
    this.cantidad = 0
    this.categoria = ''
    this.id = 0
  }

  mostrarProducto(id: number){
    this._productoService.getProducto(id).subscribe(
      (response)=>{
        let producto:any = response
        console.log(response)
        this.id = producto.id
        this.nombre = producto.nombre
        this.precio = producto.precio
        this.cantidad = producto.cantidad
        this.categoria = producto.categoria
        this.dialog = true
      }
    )


  }

  guardarProducto()
  {
    let payload = {
      nombre: this.nombre,
      precio: this.precio,
      cantidad: this.cantidad,
      categoria: this.categoria,
      id: this.id
    }

    console.log('payload:',payload)
    if(this.id == 0)
    {
      //crear nuevo producto
      this._productoService.createProducto(payload).subscribe(
        (response) =>{
          console.log(response)
          this.getProductos()
          this.closeModal()
          this.clearProducto()
        }
      )
    }else{
      //editar producto
      this._productoService.updateProducto(payload).subscribe(
        (response) =>{
          console.log(response)
          this.getProductos()
          this.closeModal()
          this.clearProducto()
        }
      )
    }

    // this.closeModal()
  }

  borrarProducto(id: Number)
  {
    this._productoService.eraseProducto(id).subscribe(
      (response)=>{
        console.log('producto eliminado:',response)
        this.getProductos()
      }
    )
  }

  title()
  {
    let title = 'Nuevo Producto'
    if(this.id !== 0)
    {
      title = `Editar Producto Nro: ${this.id}`
    }
    return title
  }

  closeModal(){
    this.dialog = false
    this.clearProducto()
  }
}
