import { environment } from 'src/environments/environment';
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
    return this.constantService.getAll(`${this.PAYMENT_ENDPOINT}${environment.PAYMENTS.GET_ALL_PAYMENTS}`)
  }

  confirmPayment(id: string, payload: string){
    //confirm any payments by all users
    return this.constantService.patch(`${this.PAYMENT_ENDPOINT}/${id}`, payload)
  }

  getPaymentsByLoanId(loanId: string){
    //get all payments by loanId, any userId
    return this.constantService.get(`${this.PAYMENT_ENDPOINT}/${loanId}${environment.PAYMENTS.ADMIN_GET_PAYMENTS}`)
  }

  getPaymentById(id:string){
    //get a particular payment by paymentId, loanId and any userId
    return this.constantService.get(`${this.PAYMENT_ENDPOINT}${environment.PAYMENTS.ADMIN_GET_PAYMENTS}/${id}`)
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
    return this.constantService.get(`${this.PAYMENT_ENDPOINT}/${loanId}${environment.PAYMENTS.GET_LOAN_PAYMENTS}`)
  }
  
  getPayment(loanId: string, id:string){
    //get a particular payment by paymentId and loanId 
    return this.constantService.get(`${this.PAYMENT_ENDPOINT}/${loanId}${environment.PAYMENTS.GET_LOAN_PAYMENTS}/${id}`)
  }
  
}
