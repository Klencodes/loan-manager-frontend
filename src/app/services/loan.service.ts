import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environmentApi';
import { Loan } from '../models';
import { ConstantService } from './constant.service';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  private LOANS_ENDPOINT = environment.LOANS_ROUTE;

  constructor(
    private constantService: ConstantService
    ) { }

  //Admin gets all loan in the database
  getAllLoans(){
    return this.constantService.getAll(`${this.LOANS_ENDPOINT}/${environment.LOANS.GET_ALL_LOANS}`)
  }

  //Admin can get any user loan 
  getById(loanId){
    return this.constantService.get(`${this.LOANS_ENDPOINT}/${environment.LOANS.ADMIN_GET_LOAN}/${loanId}`)
  }

  //Admin can approve/update loan 
  approveLoan(loanId: string, payload: Loan){
    return this.constantService.patch(`${this.LOANS_ENDPOINT}/${loanId}`, payload)
  }
  
  //Admin can delete a loan 
  deleteLoan(loanId){
    return this.constantService.delete(`${this.LOANS_ENDPOINT}/${loanId}`)
  }

  //Admin can add a document to a loan 
  addDoc(loanId:string, payload:string){
    return this.constantService.post(`${this.LOANS_ENDPOINT}/${loanId}/${environment.LOANS.ADMIN_ADD_DOCUMENT}`, payload)
  }

  //Admin can get a document from a loan 
  getDoc(id: string, docId: string){
    return this.constantService.get(`${this.LOANS_ENDPOINT}/${id}/${environment.LOANS.ADMIN_GET_DOCUMENT}/${docId}`)
  }

  //Admin can update a document in a loan
  updateDoc(loanId:string, payload:string, docId: string){
    return this.constantService.patch(`${this.LOANS_ENDPOINT}/${loanId}/${environment.LOANS.ADMIN_UPDATE_DOCUMENT}/${docId}`, payload)
  }

  //Admin can delete a document from a loan
  deleteDoc(loanId:string, docId: string){
    return this.constantService.delete(`${this.LOANS_ENDPOINT}/${loanId}/${environment.LOANS.LOAN_DOCUMENTS}/${docId}`)
  }


  
  getLoans(){
    return this.constantService.getAll(this.LOANS_ENDPOINT)
  }

  getLoan(id){
    let url = this.LOANS_ENDPOINT
    return this.constantService.get(`${url}/${id}`)
  }
  
  requestLoan(payload: Loan){
    return this.constantService.post(`${this.LOANS_ENDPOINT}/${environment.LOANS.REQUEST_LOAN}`, payload)
  }

  getAllDocuments(id: string){
    return this.constantService.get(`${this.LOANS_ENDPOINT}/${id}/${environment.LOANS.LOAN_DOCUMENTS}`)
  }

  getDocument(id: string, docId: string){
    return this.constantService.get(`${this.LOANS_ENDPOINT}/${id}/${environment.LOANS.LOAN_DOCUMENTS}/${docId}`)
  }

  createDocument(loanId:string, payload:string){
    return this.constantService.post(`${this.LOANS_ENDPOINT}/${loanId}/${environment.LOANS.LOAN_DOCUMENTS}`, payload)
  }

  updateDocument(loanId:string, payload:string, docId: string){
    return this.constantService.patch(`${this.LOANS_ENDPOINT}/${loanId}/${environment.LOANS.LOAN_DOCUMENTS}/${docId}`, payload)
  }

}

