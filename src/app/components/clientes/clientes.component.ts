import { Component } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss'],
  providers:[ClienteService]
})
export class ClientesComponent {
  clientes: Array <any> = []
  dialog: Boolean = false

  id:Number = 0
  nombre: String = ''
  telefono: Number = 0
  email: String = ''

  constructor( private _clienteService: ClienteService){
    this.getClientes()
  }

  getClientes(){

    this._clienteService.getListClientes().subscribe(
      (response) => {

        this.clientes = response

      }
    );
  }

  crearCliente()
  {
    this.dialog = true
    this.clearCliente()
  }

  clearCliente()
  {
    this.nombre = ''
    this.telefono = 0
    this.email = ''
    this.id = 0
  }

  mostrarCliente(id: number){
    this._clienteService.getCliente(id).subscribe(
      (response)=>{
        let cliente:any = response
        console.log(response)
        this.id = cliente.id
        this.nombre = cliente.nombre
        this.email = cliente.email
        this.telefono = cliente.telefono
        this.dialog = true
      }
    )


  }


  guardarCliente()
  {
    let payload = {
      nombre: this.nombre,
      email: this.email,
      telefono: this.telefono,
      id: this.id
    }

    console.log('payload:',payload)
    if(this.id == 0)
    {
      //crear nuevo producto
      this._clienteService.createCliente(payload).subscribe(
        (response) =>{
          console.log(response)
          this.getClientes()
          this.closeModal()
          this.clearCliente()
        }
      )
    }else{
      //editar producto
      this._clienteService.updateCliente(payload).subscribe(
        (response) =>{
          console.log(response)
          this.getClientes()
          this.closeModal()
          this.clearCliente()
        }
      )
    }

    // this.closeModal()
  }

  borrarCliente(id: Number)
  {
    this._clienteService.eraseCliente(id).subscribe(
      (response)=>{
        console.log('Cliente eliminado:',response)
        this.getClientes()
      }
    )
  }

  title()
  {
    let title = 'Nuevo Cliente'
    if(this.id !== 0)
    {
      title = `Editar Cliente Nro: ${this.id}`
    }
    return title
  }

  closeModal(){
    this.dialog = false
    this.clearCliente()
  }

}
