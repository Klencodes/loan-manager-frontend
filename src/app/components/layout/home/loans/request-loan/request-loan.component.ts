import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LoanService} from 'src/app/services/_index';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'request-loan',
  templateUrl: './request-loan.component.html'
})
export class RequestLoanComponent implements OnInit {

  loanTypes = ['Personal Loan', 'Agriculture Loan', 'Business Loan', 'Property Loan', ];
  submitted: Boolean = false;
  isAddMode: Boolean;
  requestForm: FormGroup;
  loanId: string;
  loading: Boolean;

  constructor(
    private loanService: LoanService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.requestForm = this.formBuilder.group({
      loanType: ['', [Validators.required]],
      loanAmount: ['', [Validators.required, Validators.max(50000)]],
    });
  }

  requestLoan() {
    this.loanService.requestLoan(this.requestForm.value).subscribe((res) => {
      this.loanId = res['LoanDoc'].id
      console.log(this.loanId)
      console.log(res)
      this.toastr.success(res['message'], 'Successful');
      this.router.navigate(['/loans', this.loanId, 'document']);
    });
  }

  onSubmit() {
    this.submitted = true;
    // reset alerts on submit
    this.toastr.clear();
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
