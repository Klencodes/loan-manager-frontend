import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Loan } from 'src/app/models';
import { LoanService } from 'src/app/services/_index';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'view-loan',
  templateUrl: './view-loan.component.html'
})
export class ViewLoanComponent implements OnInit {

  loans: Loan[];
  docs: any;
  loanId: string = '';
  loanDetails: Loan;

  constructor(
    private route: ActivatedRoute,
    private loanService: LoanService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{
      this.loanId = params.id
    });
    this.getLoanInfo();
  }

  //This contains All information available on a particular user
  getLoanInfo() {
    this.loanService.getLoan(this.loanId).subscribe((res: Loan[]) => {
      this.loanDetails = res['loan'];
      if (this.loanId) {
        //this is all documents submitted with a loan by User
        this.loanService.getAllDocuments(this.loanId).subscribe((doc: any) => {
          this.docs = doc['documents'];
          this.toastr.success('Loan Infomation returned successfully', 'Successful');
        });
      } else {
        this.loanId = undefined;
      }
    });
  }
}