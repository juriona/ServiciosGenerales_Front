import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class VentaService {

  private baseUrl = environment.apiEndPoint
  constructor(private http:HttpClient) { }

  private header(){
    let header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'token' : ''
    })
    return header
  }


  getListVentas():Observable <any> {
    return this.http.get(`${this.baseUrl}/ventas`,{headers: this.header()})
  }

  getVentasByCliente(id:Number){
    return this.http.get(`${this.baseUrl}/venta/cliente/${id}`,{headers: this.header()})
  }

  createVenta(data: any){
    return this.http.post(`${this.baseUrl}/clientes/venta`,data,{headers: this.header()})
  }
}
