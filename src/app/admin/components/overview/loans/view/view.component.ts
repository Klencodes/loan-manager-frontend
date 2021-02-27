import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Doc, Loan } from 'src/app/models';
import { AccountService, LoanService } from 'src/app/services/_index';

@Component({
  selector: 'view',
  templateUrl: './view.component.html',
})
export class ViewComponent implements OnInit {
  loans: Loan[];
  docs: any;
  id: string = '';
  loanDetails: any;

  constructor(
    private route?: ActivatedRoute,
    private loanService?: LoanService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getGeneralUserInfo();
  }

  //This contains All information available on a particular user
  getGeneralUserInfo() {
    this.loanService.getById(this.id).subscribe((res: Loan[]) => {
      this.loanDetails = res['loans'];
      if (this.id) {
        //this is all documents submitted with a loan by User
        this.loanService.getAllDocuments(this.id).subscribe((doc: any) => {
          this.docs = doc['documents'];
        });
      } else {
        this.id === undefined;
      }
    });
  }
}
