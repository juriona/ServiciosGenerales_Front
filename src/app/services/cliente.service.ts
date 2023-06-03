import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private baseUrl = environment.apiEndPoint
  constructor( private http: HttpClient ) { }

  private header(){
    let header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'token' : ''
    })
    return header
  }

  getListClientes():Observable <any> {

    return this.http.get(`${this.baseUrl}/clientes`,{headers: this.header()})
  }

  createCliente(data: object):Observable <any> {
    return this.http.post(`${this.baseUrl}/clientes`,data,{headers: this.header()})
  }

  updateCliente(data: any):Observable <any> {
    return this.http.put(`${this.baseUrl}/clientes/${data.id}`, data, {headers: this.header()})
  }

  eraseCliente(id: Number){
    return this.http.delete(`${this.baseUrl}/clientes/${id}`,{headers: this.header()})
  }

  getCliente(id:Number){
    return this.http.get(`${this.baseUrl}/clientes/${id}`,{headers: this.header()})
  }
}
