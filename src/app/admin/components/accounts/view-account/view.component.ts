import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Account } from 'src/app/models';
import { AccountService } from 'src/app/services/_index';

@Component({
  templateUrl: './view.component.html',
})
export class ViewComponent implements OnInit {
  id: string = '';
  accountDetails: Account;

  constructor(
    private route: ActivatedRoute,
    private accountService: AccountService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.accountService.getById(this.id).subscribe(res => {
      this.accountDetails = res;
    });
  }
}
