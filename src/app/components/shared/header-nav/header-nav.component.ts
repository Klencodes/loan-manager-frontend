import { Component, OnInit } from '@angular/core';
import { Role, Account, Payment } from 'src/app/models';
import { AccountService, PaymentService } from 'src/app/services/_index';

@Component({
  selector: 'header-nav',
  templateUrl: './header-nav.component.html',
})
export class HeaderNavComponent implements OnInit {
  Role = Role;
  account: Account;

  payments: Payment[];

  constructor(
    private paymentService: PaymentService,
    private accountService: AccountService
  ) {
    this.accountService.account.subscribe((x) => (this.account = x));
  }

  ngOnInit(): void {
    this.getPayments();
  }

  logout() {
    this.accountService.logout();
  }

  getPayments() {
    if (this.account) {
      this.paymentService.getPayments().subscribe((res) => {
        this.payments = res['payments'].slice(-5);
      });
    } else {
      this.account = undefined;
    }
  }
}
