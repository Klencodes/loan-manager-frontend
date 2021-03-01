import { Component, OnInit } from '@angular/core';
import { Loan } from 'src/app/models';
import { LoanService, AlertService } from 'src/app/services/_index';

@Component({
  selector: 'list-loans',
  templateUrl: './list-loans.component.html'
})
export class ListLoansComponent implements OnInit {
  
    modalTitle = 'Request New Loan'
    loanObj: any;
    loans: Loan[];
    isDeleting: Boolean;
  
    constructor(
      private loanService: LoanService,
      private alertService: AlertService,
    ) { }
  
    ngOnInit(): void {
      this.getLoans()
    }
  
    getLoans(){
      this.loanService.getLoans().subscribe((res) => {
        this.loanObj = res;
        this.loans =this.loanObj.loans;
        this.alertService.success(res['message'], {
        });
      })
    }
  
  }