import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private baseUrl = environment.apiEndPoint

  constructor(private http:HttpClient) {


  }
  private header(){
    let header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'token' : ''
    })
    return header
  }

  getListProductos():Observable <any> {

    return this.http.get(`${this.baseUrl}/productos`,{headers: this.header()})
  }

  createProducto(data: object):Observable <any> {
    return this.http.post(`${this.baseUrl}/productos`,data,{headers: this.header()})
  }

  updateProducto(data: any):Observable <any> {
    return this.http.put(`${this.baseUrl}/productos/${data.id}`, data, {headers: this.header()})
  }

  eraseProducto(id: Number){
    return this.http.delete(`${this.baseUrl}/productos/${id}`,{headers: this.header()})
  }

  getProducto(id:Number){
    return this.http.get(`${this.baseUrl}/productos/${id}`,{headers: this.header()})
  }

}
