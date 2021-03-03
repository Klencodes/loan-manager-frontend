import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Account, Doc, Loan } from 'src/app/models';
import { LoanService } from 'src/app/services/_index';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'view',
  templateUrl: './view.component.html',
})
export class ViewComponent implements OnInit {
  loans: Loan[];
  documents: Doc[]
  loanId: string;
  docId: string;
  loanDetails: any;
  userDetails: Account
  isDeleting?: Boolean;
  message: string;


  constructor(
    private route: ActivatedRoute,
    private loanService: LoanService,
    private toastr: ToastrService,    
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.loanId = params.id;
    });
    this.getLoanInfo();
  }

  //This contains All information available on a particular loan
  getLoanInfo() {
    this.loanService.getById(this.loanId).subscribe((res: Loan[]) => {
      this.loanDetails = res['loans'];
      this.userDetails = res['loans'].accountId;
      console.log(this.userDetails)
      if (this.loanId) {
        //this is all documents submitted with a loan by User
        this.loanService.getAllDocuments(this.loanId).subscribe((res: Doc[]) => {
          this.documents = res['documents'];
          this.toastr.success('Loan Infomation returned successfully', 'Successful');
        });
      } else {
        this.loanId = undefined;
      }
    });
  }

  onDeleteDocument(docId: string) {
    this.loanService.deleteDoc(this.loanId, docId).subscribe((res: any) => {
      this.message = res.message
      this.documents = this.documents.filter(val => val.id !== this.docId);
      this.toastr.warning(this.message, 'Success')
    })
  }

}
 