import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Account, Loan } from 'src/app/models';
import { AlertService, LoanService } from 'src/app/services/_index';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit {
  id: string = '';
  $loansObj: any;
  loans: Loan[];
  docs: Document[];
  isDeleting: Boolean;

  constructor(
    private loanService: LoanService,
    private route: ActivatedRoute,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.getAllLoans();
  }

  //Get all loans from Db
  getAllLoans() {
    this.loanService.getAllLoans().subscribe((res) => {
      this.$loansObj = res;
      this.loans = this.$loansObj.loans;
    });
  }

}
 