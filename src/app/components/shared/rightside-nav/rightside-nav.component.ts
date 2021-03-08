import { Component, OnInit } from '@angular/core';
import { Loan, Payment } from 'src/app/models';
import { AccountService, LoanService, PaymentService } from 'src/app/services/_index';

@Component({
  selector: 'rightside-nav',
  templateUrl: './rightside-nav.component.html',
})
export class RightsideNavComponent implements OnInit {

  accounts: Account[];
  payments: Payment[];
  loans: Loan[];

  constructor(
    private accountService: AccountService,
    private paymentService: PaymentService,
    private loanService: LoanService
  ) { }

  ngOnInit(): void {
    this.getAllAccounts();
    this.getAllPayments();
    this.getAllLoans()
  }

  //Get all verified accounts from Db
   getAllAccounts() {
    this.accountService.getAll().subscribe((res: any) => {
        this.accounts = res.accounts.slice(-3);
        console.log(this.accounts)

      });
  }
  //Get all loans from Db
  getAllLoans() {
    this.loanService.getAllLoans().subscribe((res: any) => {
      this.loans = res.loans.slice(-5);
      console.log(this.loans)

    });
  }
  //Get all payments from Db
  getAllPayments() {
    this.paymentService.getAllPayments().subscribe((res: any) => {
      this.payments = res.payments.slice(-5);
      console.log(this.payments)
    });
  }


}
