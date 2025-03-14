import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Account } from 'src/app/models';
import { AccountService } from 'src/app/services/_index';
import { ToastrService } from 'ngx-toastr';


@Component({
  templateUrl: './view.component.html',
})
export class ViewComponent implements OnInit {
  id: string = '';
  accountDetails: Account;

  constructor(
    private route: ActivatedRoute,
    private accountService: AccountService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.accountById()
  }

  accountById(){
    this.id = this.route.snapshot.paramMap.get('id');
    this.accountService.getById(this.id).subscribe(res => {
      this.accountDetails = res;
      this.toastr.success('Account Information returned sucessfully', 'Successful');
    });
  }
}
