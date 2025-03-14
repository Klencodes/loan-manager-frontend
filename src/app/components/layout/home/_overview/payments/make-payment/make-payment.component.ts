import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Loan, Payment } from 'src/app/models';
import { AppUtilsService } from 'src/app/services/app-utils.service';
import { LoanService, PaymentService } from 'src/app/services/_index';

@Component({ templateUrl: './make-payment.component.html' })

export class MakePaymentComponent implements OnInit {
  paymentForm: FormGroup;
  paymentTypes: any[];
  submitted: Boolean = false;
  loanId: string = '';
  loanDetails: Loan;
  loading: Boolean = false;
  loanPayments: Payment[];
  lastPayment: Payment;
  transactions = this.appUtils.transactions;


  constructor(
    private loanService: LoanService,
    private paymentService: PaymentService,
    private toastr: ToastrService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private appUtils: AppUtilsService,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.loanId = params.loanId;
      if (this.loanId) {
        this.loanService.getLoan(this.loanId).subscribe((res:any) => {
          this.loanDetails = res.loan;
        });
      }
    });
    this.paymentForm = this.formBuilder.group({
      transaction: ['', [Validators.required]],
      paymentType: ['', [Validators.required]],
      paymentAccount: ['', [Validators.required]],
      amountPaid: ['', [Validators.required]],
    });
    // this.paymentForm.get('transaction').valueChanges.subscribe((paymentType) => {
    //   this.paymentTypes = paymentType.paymentTypes;
    // });

    this.getLoanPayments();
  }

  makePayment() {
    this.paymentService.makePayment(this.loanId, this.paymentForm.value)
      .subscribe((res) => {
        this.toastr.success(res['message'], 'Successful'),
          { keepAfterRouteChange: true };
        this.router.navigate(['../../../'], { relativeTo: this.route });
      });
  }

  getLoanPayments() {
    this.paymentService.getLoanPayments(this.loanId).subscribe((res: any) => {
      this.loanPayments = res['payments'];
      this.lastPayment = this.loanPayments[this.loanPayments.length - 1];
    });
  }

  onSubmit() {
    this.submitted = true;
    this.toastr.clear();
    // stop here if form is invalid
    if (this.paymentForm.invalid) {
      return;
    }
    this.makePayment();
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.paymentForm.controls;
  }
}
