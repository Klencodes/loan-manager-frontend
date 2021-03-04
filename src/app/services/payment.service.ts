import { environment } from 'src/environments/environmentApi';
import { Injectable } from '@angular/core';
import { ConstantService } from './constant.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private PAYMENT_ENDPOINT = environment.PAYMENTS_ROUTE;

  constructor(
    private constantService: ConstantService
  ) { }
  
  getAllPayments(){
    //get all payments by all Users
    return this.constantService.getAll(`${this.PAYMENT_ENDPOINT}/${environment.PAYMENTS.GET_ALL_PAYMENTS}`)
  }

  confirmPayment(loanId: string, payload: string){
    //confirm any payments by all users
    return this.constantService.post(`${this.PAYMENT_ENDPOINT}/${loanId}/${environment.PAYMENTS.CONFIRM_PAYMENT}`, payload)
  }



  getPayments(){
    //get all payments by User Id
    return this.constantService.getAll(this.PAYMENT_ENDPOINT)
  }

  makePayment(loanId: string, payload: string ){
    //make payment by user Id and loanId
    return this.constantService.post(`${this.PAYMENT_ENDPOINT}/${loanId}`, payload)
  }

  getLoanPayments(loanId: string){
    //get all payments by loanId
    return this.constantService.get(`${this.PAYMENT_ENDPOINT}/${loanId}/${environment.PAYMENTS.GET_LOAN_PAYMENTS}`)
  }
  
  getPayment(loanId: string, id:string){
    //get a particular payment by paymentId and loanId 
    return this.constantService.get(`${this.PAYMENT_ENDPOINT}/${loanId}/${environment.PAYMENTS.GET_LOAN_PAYMENTS}/${id}`)
  }
  
}
