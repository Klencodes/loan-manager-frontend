import { Component, OnInit } from '@angular/core';
import { Role, Account } from 'src/app/models';
import { AccountService } from 'src/app/services/_index';

@Component({
  selector: 'leftside-nav',
  templateUrl: './leftside-nav.component.html',
})
export class LeftsideNavComponent implements OnInit {

  Role = Role;
  account: Account;

  constructor(
      private accountService: AccountService,
      ) {
      this.accountService.account.subscribe(x => this.account = x);
  }

  ngOnInit(): void {
  }

}
