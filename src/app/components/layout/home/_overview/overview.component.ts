import { Component, OnInit } from '@angular/core';
import { Loan } from 'src/app/models';
import { AlertService, LoanService } from 'src/app/services/_index';

@Component({
  templateUrl: './overview.component.html'
})
export class OverviewComponent implements OnInit {

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