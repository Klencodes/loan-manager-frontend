import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentsRoutingModule } from './payments-routing.module';
import { ListPaymentsComponent } from './list-payments/list-payments.component';
import { MakePaymentComponent } from './make-payment/make-payment.component';
import { ViewPaymentComponent } from './view-payment/view-payment.component';
import { MaterialModule } from 'src/app/components/modules';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListPaymentsComponent, 
    MakePaymentComponent, 
    ViewPaymentComponent
  ],
  imports: [
    CommonModule,
    PaymentsRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class PaymentsModule { }
