import { Component, OnInit } from '@angular/core';
import { LoanService } from 'src/app/services/_index';
import { ToastrService } from 'ngx-toastr'
import { MatDialog } from '@angular/material/dialog';
import { RequestLoanComponent } from './request-loan/request-loan.component';


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
    private toastr: ToastrService,
    public dialog: MatDialog

  ) {}

  ngOnInit(): void {
    this.loanService.getLoans().subscribe((res) => {
      this.loanObj = res;
      this.loans = this.loanObj.loans;
      this.toastr.success(res['message'], 'Successful');
    });
  }

  requstDialog(): void {
    this.dialog.open(RequestLoanComponent, {
      minWidth: '320px'
    })
  }

}
