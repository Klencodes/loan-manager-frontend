import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Payment, Loan } from 'src/app/models';
import { PaymentService } from 'src/app/services/_index';

@Component({ templateUrl: './list.component.html' })
export class ListComponent implements OnInit {

  payments: Payment[];
  loanDetails: Loan;
  accountDetails: Account;
  message: string;
  // totalLoan: Number;

  constructor(
    private paymentService: PaymentService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAllPayments();
  }

  getAllPayments(){
    this.paymentService.getAllPayments().subscribe((res) => {
      this.payments = res['payments'];
      this.message = res['message'];
      this.toastr.success(this.message, 'Successful');
      // console.log(res, 'THIS RES')
    });
  }

}