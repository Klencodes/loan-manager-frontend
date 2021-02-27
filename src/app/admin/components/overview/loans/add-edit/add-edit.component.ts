import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Doc, Loan } from 'src/app/models';
import { AlertService, LoanService } from 'src/app/services/_index';

@Component({
  templateUrl: './add-edit.component.html',
})
export class AddEditComponent implements OnInit {
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
  id: string;
  loading: Boolean;
  loanRes: any;
  loanDocs: Doc[]

  constructor(
    private loanService: LoanService,
    private formBuilder: FormBuilder,
    private alertService: AlertService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    // Get id from the request header and map the data to the form control fields
    this.id = this.route.snapshot.paramMap.get('id');
    // console.log(this.id)
    this.isAddMode = !this.id;
    // Display only if it is edit mode
    this.loanService.getById(this.id).subscribe((res) => {
      // console.log(res, 'THIS IS RES');
      this.loanRes = res['loans'];      
      this.requestForm.patchValue({
        loanType: this.loanRes['loanType'],
        loanAmount: this.loanRes['loanAmount'],
        loanStatus: this.loanRes['loanStatus'],
      });
    });

    this.requestForm = this.formBuilder.group({
      loanType: ['', [Validators.required]],
      loanAmount: ['', [Validators.required, Validators.max(50000)]],
      loanStatus: [''],
    });
  }

  ngOnInit(): void {
    this.getDocumentsByLoanId();
    if (!this.isAddMode) {
      this.loanService.getById(this.id)
        .subscribe((res) => this.requestForm.patchValue(res));
    }
    this.onSubmit();
  }

  requestLoan() {
    this.loanService.requestLoan(this.requestForm.value).subscribe((res) => {
      this.alertService.success('Loan Approved successfully', {
        keepAfterRouteChange: true,
      });
      this.router.navigate(['../'], { relativeTo: this.route });
    });
    // console.log(this.requestForm.value);
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
  approveLoan() {
    this.loanService.approveLoan(this.id, this.requestForm.value)
      .subscribe((res) => {
        console.log(res)
        this.loanRes = res;
        this.alertService.success('Loan Approved successfully', {
          keepAfterRouteChange: true,
        });
        this.router.navigate(['../../'], { relativeTo: this.route });
      });
  }

  getDocumentsByLoanId(){
    this.loanService.getAllDocuments(this.id).subscribe((docs:Doc[]) => {
      console.log(docs)
      docs = this.loanDocs
    })
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.requestForm.controls;
  }
}
