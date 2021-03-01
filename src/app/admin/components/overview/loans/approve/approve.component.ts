import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { first } from 'rxjs/operators';
import { Doc } from 'src/app/models';
import { LoanService, AlertService } from 'src/app/services/_index';

@Component({ templateUrl: './approve.component.html' })
export class ApproveComponent implements OnInit {
  loanTypes = [
    'Personal Loan',
    'Agriculture Loan',
    'Business Loan',
    'Property Loan',
  ];
  allStatus = ['Pending', 'Approved', 'Recovered', 'Canceled'];
  submitted: Boolean = false;
  isAddMode: Boolean = false;
  requestForm: FormGroup;
  loanId: any;
  loading: Boolean;
  loanRes: any;
  user: any;
  documents: Doc[];

  constructor(
    private loanService: LoanService,
    private formBuilder: FormBuilder,
    private alertService: AlertService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.loanId = params.id;
      if (!this.isAddMode) {
        this.loanService.getById(this.loanId).subscribe((res) => {
          this.loanRes = res['loans'];
          this.user = this.loanRes['accountId'];
          this.requestForm.patchValue({
            loanType: this.loanRes.loanType,
            loanAmount: this.loanRes.loanAmount,
            loanStatus: this.loanRes.loanStatus,
          });
        });
      }else{
        this.loanId = undefined;
      }
    });

    this.isAddMode = !this.loanId;
    this.requestForm = this.formBuilder.group({
      loanType: ['', [Validators.required]],
      loanAmount: ['', [Validators.required, Validators.max(50000)]],
      loanStatus: ['', [Validators.required]],
    });

    this.getDocumentsByLoanId();
  }

  requestLoan() {
    this.loanService.requestLoan(this.requestForm.value).subscribe((res) => {
      this.alertService.success('Loan Approved successfully', {
        keepAfterRouteChange: true,
      });
      this.router.navigate(['../'], { relativeTo: this.route });
    });
  }

  approveLoan() {
    this.loanService
      .approveLoan(this.loanId, this.requestForm.value).subscribe((res) => {
        this.loanRes = res;
        this.alertService.success('Loan Approved successfully', {
          keepAfterRouteChange: true,
        });
        this.router.navigate(['../../'], { relativeTo: this.route });
      });
  }

  onSubmit() {
    this.submitted = true;
    // reset alerts on submit
    this.alertService.clear();
    // stop here if form is invalid
    if (this.requestForm.invalid) {
      return;
    }
    if (this.isAddMode) {
      this.requestLoan();
    } else {
      this.approveLoan();
    }
  }

  getDocumentsByLoanId() {
    this.loanService.getAllDocuments(this.loanId).subscribe((docs: Doc[]) => {
      this.documents = docs['documents']
    });
  }

  onDeleteLoan() {
    this.loanService.deleteLoan(this.loanId).subscribe((res: any) => {
      this.router.navigate(['../../'], { relativeTo: this.route });
      this.alertService.success(res['message']);
      this.getDocumentsByLoanId()
    });
  }
  
  // convenience getter for easy access to form fields
  get f() {
    return this.requestForm.controls;
  }

}
