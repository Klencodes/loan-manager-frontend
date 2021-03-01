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
  user: any;
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

  deleteLoan(id: string) {
    const loan = this.loans.find((x) => x.id === id);
    loan.isDeleting = true;
    this.loanService.deleteLoan(id).pipe(first())
      .subscribe((res) => {
        this.alertService.success(res['message'], {
          keepAfterRouteChange: true,
        });
        this.loans = this.loans.filter((x) => x.id !== id);
      });
  }
}
 