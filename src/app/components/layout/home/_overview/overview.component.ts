import { Component, OnInit } from '@angular/core';
import { Loan } from 'src/app/models';
import { LoanService } from 'src/app/services/_index';
import { ToastrService } from 'ngx-toastr'

@Component({
  templateUrl: './overview.component.html'
})
export class OverviewComponent implements OnInit {

  loanObj: any;
  loans: Loan[];

  constructor(
    private loanService: LoanService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.loanService.getLoans().subscribe((res) => {
      this.loanObj = res;
      this.loans = this.loanObj.loans;
      console.log(this.loans)
      
      this.toastr.success('Request was successful', 'Successful');
    });
  }
}