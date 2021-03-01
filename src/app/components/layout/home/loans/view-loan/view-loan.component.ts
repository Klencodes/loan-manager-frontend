import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Loan } from 'src/app/models';
import { LoanService } from 'src/app/services/_index';

@Component({
  selector: 'view-loan',
  templateUrl: './view-loan.component.html'
})
export class ViewLoanComponent implements OnInit {

  loans: Loan[];
  docs: any;
  loanId: string = '';
  loanDetails: any;

  constructor(
    private route: ActivatedRoute,
    private loanService: LoanService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{
      this.loanId = params.id
      console.log(params)

    });
    this.getLoanInfo();
  }

  //This contains All information available on a particular user
  getLoanInfo() {
    this.loanService.getLoan(this.loanId).subscribe((res: Loan[]) => {
      this.loanDetails = res['loans'];
      if (this.loanId) {
        //this is all documents submitted with a loan by User
        this.loanService.getAllDocuments(this.loanId).subscribe((doc: any) => {
          this.docs = doc['documents'];
        });
      } else {
        this.loanId = undefined;
      }
    });
  }
}