import { Component } from '@angular/core';
import { VentaService } from 'src/app/services/venta.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [VentaService]
})
export class HomeComponent {

  productos: Array<any> = []

  constructor(private _ventaService: VentaService)
  {
    this.getProductosMasVendidos()
  }

  getProductosMasVendidos()
  {
    this._ventaService.getProductosMasVendidos().subscribe(
      (response)=>{
        console.log(response)
        this.productos = response.producto_mas_vendidos
      }
    )
  }
}
