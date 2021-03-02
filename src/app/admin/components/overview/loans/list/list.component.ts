import { Component, OnInit } from '@angular/core';
import { Loan } from 'src/app/models';
import { LoanService } from 'src/app/services/_index';
import { ToastrService } from 'ngx-toastr';


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
  message: string;

  constructor(
    private loanService: LoanService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getAllLoans();
  }

  //Get all loans from Db
  getAllLoans() {
    this.loanService.getAllLoans().subscribe((res) => {
      this.$loansObj = res;
      this.message = res['message']
      this.loans = this.$loansObj.loans;
      this.toastr.success(this.message , 'Success')

    });
  }

}
 