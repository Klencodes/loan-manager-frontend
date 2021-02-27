import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LoanService, AlertService } from 'src/app/services/_index';

@Component({
  templateUrl: './request.component.html',
})
export class RequestComponent implements OnInit {
  loanTypes = [
    'Personal Loan',
    'Agriculture Loan',
    'Business Loan',
    'Property Loan',
  ];
  submitted: Boolean = false;
  isAddMode: Boolean;
  requestForm: FormGroup;
  id: string;
  loading: Boolean;

  constructor(
    private loanService: LoanService,
    private formBuilder: FormBuilder,
    private alertService: AlertService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.requestForm = this.formBuilder.group({
      loanType: ['', [Validators.required]],
      loanAmount: ['', [Validators.required, Validators.max(50000)]],
    });
  }

  requestLoan() {
    this.loanService.requestLoan(this.requestForm.value).subscribe((res) => {
      console.log(res)
      console.log(this.requestForm.value)
      this.alertService.success(res['message'], {
        keepAfterRouteChange: true,
      });
      this.router.navigate(['../'], { relativeTo: this.route });
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
    this.requestLoan();
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.requestForm.controls;
  }
}
