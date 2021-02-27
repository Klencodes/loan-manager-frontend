import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environmentApi';
import { Loan } from '../models';
import { ConstantService } from './constant.service';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  private LOANS_ENDPOINT = environment.LOANS_ENDPOINT;

  constructor(
    private constantService: ConstantService
    ) { }
  //Admin only
  getAllLoans(){
    let url = this.LOANS_ENDPOINT + environment.LOANS.GET_ALL_LOANS
    return this.constantService.getAll(url)
  }

  getLoans(){
    return this.constantService.getAll(this.LOANS_ENDPOINT)
  }

  //Admin only
  getById(id){
    let url = this.LOANS_ENDPOINT
    return this.constantService.getById(`${url}find/${id}`)
  }
  
  requestLoan(payload: Loan){
    let url = this.LOANS_ENDPOINT + environment.LOANS.REQUEST_LOAN
    return this.constantService.post(`${url}`, payload)
  }

  approveLoan(id: string, payload: Loan){
    return this.constantService.patch(`${this.LOANS_ENDPOINT}${id}`, payload)
  }

  deleteLoan(id){
    return this.constantService.delete(`${this.LOANS_ENDPOINT}${id}`)
  }

  getAllDocuments(id: string){
    return this.constantService.getById(`${this.LOANS_ENDPOINT}${id}/${environment.LOANS.LOAN_DOCUMENTS}`)
  }
}
