import { AccountService } from 'src/app/services/account.service';
import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { LoanService, PaymentService } from 'src/app/services/_index';
import { ToastrService } from 'ngx-toastr';
import { Account, Payment, Loan } from 'src/app/models';

@Component({ templateUrl: 'overview.component.html' })
export class OverviewComponent implements OnInit {
  countAllAccounts: number;
  countAllPayments: Number;
  countAllLoans: Number;

  accounts: Account[];
  $loansObj: any;
  payments: Payment[];
  loanDetails: Loan;
  accountDetails: Account;
  loans: Loan[];

  constructor(
    private accountService: AccountService,
    private loanService: LoanService,
    private toastr: ToastrService,
    private paymentService: PaymentService
  ) {}

  ngOnInit() {
    this.onLoadFunctions();
  }

  onLoadFunctions() {
    this.getAllAccounts();
    this.getAllLoans();
    this.getAllPayments();
  }

  getAllAccounts() {
    this.accountService.getAll().subscribe((result: any) => {
        this.accounts = result.accounts;
        this.countAllAccounts = result.count;
        // console.log(result, 'Result Object')
      });
  }
  //Get all loans from Db
  getAllLoans() {
    this.loanService.getAllLoans().subscribe((res) => {
      this.$loansObj = res;
      this.countAllLoans = this.$loansObj.totalLoans;
      this.loans = this.$loansObj.loans;
    });
  }

  getAllPayments() {
    this.paymentService.getAllPayments().subscribe((res) => {
      this.payments = res['payments'];
      this.countAllPayments = res['totalPayments'];
    });
  }

  deleteAccount(id: string) {
    const account = this.accounts.find((x) => x.id === id);
    account.isDeleting = true;
    this.accountService.delete(id)
      .pipe(first()).subscribe(() => {
        this.accounts = this.accounts.filter((x) => x.id !== id);
        this.toastr.success('Account Deleted Successfully', 'Success');
      });
  }
}
