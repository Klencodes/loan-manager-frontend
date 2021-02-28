import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Loan } from 'src/app/models';
import { LoanService } from 'src/app/services/_index';

@Component({
  selector: 'view-loan',
  templateUrl: './view-loan.component.html'
})
export class ViewLoanComponent implements OnInit {

  loans: Loan[];
  docs: any;
  id: string = '';
  loanDetails: any;

  constructor(
    private route: ActivatedRoute,
    private loanService: LoanService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getLoanInfo();
  }

  //This contains All information available on a particular user
  getLoanInfo() {
    this.loanService.getById(this.id).subscribe((res: Loan[]) => {
      this.loanDetails = res['loans'];
      if (this.id) {
        //this is all documents submitted with a loan by User
        this.loanService.getAllDocuments(this.id).subscribe((doc: any) => {
          this.docs = doc['documents'];
        });
      } else {
        this.id = undefined;
      }
    });
  }
}