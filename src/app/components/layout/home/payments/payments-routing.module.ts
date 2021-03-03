import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPaymentsComponent } from './list-payments/list-payments.component';
import { MakePaymentComponent } from './make-payment/make-payment.component';
import { ViewPaymentComponent } from './view-payment/view-payment.component';

const routes: Routes = [
  { path: '', component: ListPaymentsComponent },
  { path: ':loanId/payment', component: MakePaymentComponent },
  { path: 'view/:id', component: ViewPaymentComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentsRoutingModule { }
