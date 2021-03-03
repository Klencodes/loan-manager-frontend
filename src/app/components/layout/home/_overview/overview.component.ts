import { Component, OnInit } from '@angular/core';
import { Loan, Payment } from 'src/app/models';
import { LoanService, PaymentService } from 'src/app/services/_index';
import { ToastrService } from 'ngx-toastr'

@Component({
  templateUrl: './overview.component.html'
})
export class OverviewComponent implements OnInit {

  loanObj: any;
  loans: Loan[] = [];
  payments: Payment;
  loan: Loan;
  paymentCount: Number;

  constructor(
    private loanService: LoanService,
    private paymentService: PaymentService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getLoans();
    this.getPayments();
  }

  getPayments() {
    this.paymentService.getPayments().subscribe((res) =>{
      this.payments = res['payments'];
      this.paymentCount = res['count']
    });
  }

  getLoans(){
    this.loanService.getLoans().subscribe((res) => {
      this.loanObj = res;
      this.loans = this.loanObj.loans;
      this.toastr.success('Request was successful', 'Successful');
    });
  }

}