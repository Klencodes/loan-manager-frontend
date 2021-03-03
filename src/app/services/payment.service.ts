import { environment } from 'src/environments/environmentApi';
import { Injectable } from '@angular/core';
import { ConstantService } from './constant.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private PAYMENT_ENDPOINT = environment.PAYMENTS_ENDPOINT;

  constructor(
    private constantService: ConstantService
  ) { }
  
  getAllPayments(){
    return this.constantService.getAll(`${this.PAYMENT_ENDPOINT}/${environment.PAYMENTS.GET_ALL_PAYMENTS}`)
  }

  confirmPayment(loanId: string, payload: string){
    return this.constantService.post(`${this.PAYMENT_ENDPOINT}/${loanId}/${environment.PAYMENTS.CONFIRM_PAYMENT}`, payload)
  }



  getPayments(){
    return this.constantService.getAll(this.PAYMENT_ENDPOINT)
  }

  makePayment(loanId: string, payload: string ){
    return this.constantService.post(`${this.PAYMENT_ENDPOINT}/${loanId}`, payload)
  }

  getPayment(loanId: string, id:string){
    return this.constantService.get(`${this.PAYMENT_ENDPOINT}/${loanId}/${environment.PAYMENTS.GET_PAYMENT}/${id}`)
  }

}
