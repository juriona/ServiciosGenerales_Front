import { Component } from '@angular/core';
import { VentaService } from 'src/app/services/venta.service';
import { ClienteService } from 'src/app/services/cliente.service';
@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.scss'],
  providers: [VentaService]
})
export class VentasComponent {

  ventas:Array<any> = []
  clientes: Array<any> = []


  constructor(private _ventaService: VentaService,private _clienteService: ClienteService){
    this.getVentas(0)
    this.getClientes()
  }

  getVentas(cliente_id: any)
  {
    console.log(cliente_id)
    if(cliente_id > 0)
    {
      this._ventaService.getVentasByCliente(cliente_id).subscribe(
        (response: any)=>{
          this.ventas = response
        }
      )

    }else{
      this._ventaService.getListVentas().subscribe(
        (response)=>{
          this.ventas = response
        }
      )
    }
  }

  getClientes()
  {
    this._clienteService.getListClientes().subscribe(
      (response) =>{
        this.clientes = [{
          "id": 0,
          "nombre": "Todos los Clientes",
          "telefono": 0,
          "email": ""
        }]

        let lista = response

        lista.forEach( (element: any) => {
          this.clientes.push(element)
        });
        // this.clientes = response


      }
    )
  }
}
