import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, shareReplay, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environmentApi';
import { Doc, Loan } from '../models';
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
    return this.constantService.getAll(`${this.LOANS_ENDPOINT}/${environment.LOANS.GET_ALL_LOANS}`)
  }

  //Only authorized user
  getLoans(){
    return this.constantService.getAll(this.LOANS_ENDPOINT)
  }

  //Admin only
  getById(id){
    return this.constantService.get(`${this.LOANS_ENDPOINT}/${environment.LOANS.ADMIN_GET_LOANBYID}/${id}`)
  }
  
  //Only authorized user
  getLoan(id){
    let url = this.LOANS_ENDPOINT
    return this.constantService.get(`${url}/${id}`)
  }
  
  requestLoan(payload: Loan){
    return this.constantService.post(`${this.LOANS_ENDPOINT}/${environment.LOANS.REQUEST_LOAN}`, payload)
  }

  approveLoan(id: string, payload: Loan){
    return this.constantService.patch(`${this.LOANS_ENDPOINT}/${id}`, payload)
  }

  deleteLoan(id){
    return this.constantService.delete(`${this.LOANS_ENDPOINT}/${id}`)
  }

  getAllDocuments(id: string){
    return this.constantService.get(`${this.LOANS_ENDPOINT}/${id}/${environment.LOANS.LOAN_DOCUMENTS}`)
  }

  getDocument(id: string, docId: string){
    this.constantService.get(`${this.LOANS_ENDPOINT}/${id}/${environment.LOANS.LOAN_DOCUMENTS}/${docId}`)
  }

  createDocument(loanId:string, payload:string){
    this.constantService.post(`${this.LOANS_ENDPOINT}/${loanId}/${environment.LOANS.LOAN_DOCUMENTS}`, payload)
  }

  updateDocument(loanId:string, payload:string, docId: string){
    this.constantService.patch(`${this.LOANS_ENDPOINT}/${loanId}/${environment.LOANS.LOAN_DOCUMENTS}/${docId}`, payload)
  }

  deleteDocument(loanId:string, docId: string){
    this.constantService.delete(`${this.LOANS_ENDPOINT}/${loanId}/${environment.LOANS.LOAN_DOCUMENTS}/${docId}`)
  }

}
