import { Component, OnInit } from '@angular/core';
import { PaymentService } from 'src/app/services/_index';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Loan, Payment } from 'src/app/models';


@Component({ templateUrl: './list-payments.component.html' })
export class ListPaymentsComponent implements OnInit {

  payments: Payment[];
  loanDetails: Loan;
  totalLoan: Number;

  constructor(
    private paymentService: PaymentService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getPayments();
  }

  getPayments(){
    this.paymentService.getPayments().subscribe((res) => {
      this.payments = res['payments']
      this.toastr.success(res['message'], 'Successful')  
    });
  }

}
