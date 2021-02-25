import { Component, OnInit } from '@angular/core';
import { Role, Account } from 'src/app/models';
import { AccountService } from 'src/app/services/_index';

@Component({
  selector: 'header-nav',
  templateUrl: './header-nav.component.html',
})
export class HeaderNavComponent implements OnInit {

  Role = Role;
  account: Account;

  constructor(private accountService: AccountService) {
      this.accountService.account.subscribe(x => this.account = x);
  }

  logout() {
      this.accountService.logout();
  }
  ngOnInit(): void {
  }

}
