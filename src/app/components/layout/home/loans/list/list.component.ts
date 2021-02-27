import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Loan } from 'src/app/models';
import { LoanService, AlertService } from 'src/app/services/_index';

@Component({
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {
  
  modalTitle = 'Request New Loan'
  $loansObj: any;
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
      this.$loansObj = res;
      this.loans =this.$loansObj.loans
      this.alertService.success(res['message'], {
        keepAfterRouteChange: true,
      });
      console.log(this.$loansObj)
    })
  }

}
