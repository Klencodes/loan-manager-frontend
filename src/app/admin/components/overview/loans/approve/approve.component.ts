import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Doc } from 'src/app/models';
import { LoanService } from 'src/app/services/_index';
import { ToastrService } from 'ngx-toastr';


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
  message: string;

  constructor(
    private loanService: LoanService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService,
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
      this.message = res['message']
      this.router.navigate(['../'], { relativeTo: this.route });
      this.toastr.success(this.message , 'Success')

    });
  }

  approveLoan() {
    this.loanService.approveLoan(this.loanId, this.requestForm.value).subscribe((res) => {
        this.loanRes = res;
        this.message = res['message']
        this.router.navigate(['../../'], { relativeTo: this.route });
        this.toastr.success(this.message , 'Success')
      })
  }

  onSubmit() {
    this.submitted = true;
    // reset alerts on submit
    this.toastr.clear();
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
      this.message = res.message
      this.router.navigate(['../../'], { relativeTo: this.route });
      this.toastr.warning(this.message , 'Success')
    });
  }
  
  // convenience getter for easy access to form fields
  get f() {
    return this.requestForm.controls;
  }

}
