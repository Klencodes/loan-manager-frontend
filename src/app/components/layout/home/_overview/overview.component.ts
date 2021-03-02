import { Component, OnInit } from '@angular/core';
import { Loan } from 'src/app/models';
import { LoanService } from 'src/app/services/_index';
import { ToastrService } from 'ngx-toastr'

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
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.getLoans()
  }

  getLoans(){
    this.loanService.getLoans().subscribe((res) => {
      this.loanObj = res;
      console.log(this.loanObj, 'OBJ LOAN')
      this.loans =this.loanObj.loans;
      console.log(this.loans, 'LOANS')
      this.toastr.success('Overview returned successfully', 'Successful');
    })
  }

}