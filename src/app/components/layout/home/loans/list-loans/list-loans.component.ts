import { Component, OnInit } from '@angular/core';
import { LoanService } from 'src/app/services/_index';
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'list-loans',
  templateUrl: './list-loans.component.html',
})
export class ListLoansComponent implements OnInit {
  modalTitle = 'Request New Loan';
  loanObj: any;
  loans: any;

  constructor(
    private loanService: LoanService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.loanService.getLoans().subscribe((res) => {
      this.loanObj = res;
      this.loans = this.loanObj.loans;
      this.toastr.success(res['message'], 'Successful');
    });
  }
  
}
