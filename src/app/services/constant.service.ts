import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantService {
 readonly BASE_URL = environment.BASE_URL;   // Environment
//  readonly BASE_URL = environment.BASE_URL; //Production Enviroment

  constructor( private httpClient: HttpClient) { this.BASE_URL }

  getAll(url: string){
    return this.httpClient.get(`${this.BASE_URL}${url}`)
  }

  get(url: string){
    return this.httpClient.get(`${this.BASE_URL}${url}`)
  }

  post(url: string, payload){
    return this.httpClient.post(`${this.BASE_URL}${url}`, payload)
  }

  patch(url: string, payload){
    return this.httpClient.patch(`${this.BASE_URL}${url}`, payload)
  }

  delete(url: string ){
    return this.httpClient.delete(`${this.BASE_URL}${url}` )
  }

  getByIdObject(id: string, objectUrl: string){
    return this.httpClient.get(`${this.BASE_URL}${id}/${objectUrl}`)
  }

  postLogin(url: string, email: string, password: string, withCredentials: Boolean){
    return this.httpClient.post(`${this.BASE_URL}${url}`, {email, password, withCredentials: true })
  }

}
