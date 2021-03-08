import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Payment } from 'src/app/models';
import { PaymentService } from 'src/app/services/_index';

@Component({ templateUrl: './list.component.html' })
export class ListComponent implements OnInit {

  payments: Payment[];
  message: string;
  
  constructor(
    private paymentService: PaymentService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.getAllPayments();    
  }

  getAllPayments(){
    this.paymentService.getAllPayments().subscribe((res: any) => {
      this.payments = res.payments;
      this.message = res.message;
      this.toastr.success(this.message, 'Successful');
    });
  }

}