import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Account } from 'src/app/models';
import { AccountService } from 'src/app/services';

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
    // Display only if it is edit mode
    this.accountService.getById(this.id).subscribe(res => {
      console.log(this.id, 'ID')
      this.accountDetails = res;
      console.log(res, 'RES')
      console.log(this.accountDetails, 'DETAILS')
    });
  }
}
