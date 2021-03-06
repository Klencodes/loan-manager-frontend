import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Account, Payment, Loan } from 'src/app/models';
import { PaymentService } from 'src/app/services/_index';

@Component({ templateUrl: './confirm.component.html' })
export class ConfirmComponent implements OnInit {

  allStatus = ['Pending', 'Success', 'Recovered', 'Canceled'];
  submitted: Boolean = false;
  loanId: string = '';
  id: string = '';
  confirmPaymentForm: FormGroup;
  loading: Boolean;
  paymentDetails: Payment;
  user: Account;
  loanDetails : Loan
  message: string;


  constructor(
    private paymentService: PaymentService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params.id
      if(this.id){
       this.paymentService.getPaymentById(this.id).subscribe((res) => {
         this.paymentDetails = res['payment'];
         this.user = this.paymentDetails.accountId
         this.loanDetails = this.paymentDetails.loanId
         this.confirmPaymentForm.patchValue({
           transaction: this.paymentDetails.transaction,
           paymentType: this.paymentDetails.paymentType,
           paymentStatus: this.paymentDetails.paymentStatus,
           amountPaid: this.paymentDetails.amountPaid,
           paymentDate: this.paymentDetails.paymentDate
         })
       });
      }else{
        this.id = undefined;
      }
    });

    this.confirmPaymentForm = this.formBuilder.group({
      transaction: [''],
      paymentType: [''],
      paymentStatus: [''],
      paymentDate: [''],
      amountPaid: ['']
    })
  }


  confirmPayment() {
    this.paymentService.confirmPayment(this.id, this.confirmPaymentForm.value).subscribe((res) => {
        this.message = res['message']
        this.router.navigate(['../../'], { relativeTo: this.route });
        this.toastr.success(this.message , 'Success');
      })
  }

  onSubmit() {
    this.submitted = true;
    // reset alerts on submit
    this.toastr.clear();
    // stop here if form is invalid
    if (this.confirmPaymentForm.invalid) {
      return;
    } else {
      this.confirmPayment();
    }
  }

  // // convenience getter for easy access to form fields
  get f() {
    return this.confirmPaymentForm.controls;
  }

}
