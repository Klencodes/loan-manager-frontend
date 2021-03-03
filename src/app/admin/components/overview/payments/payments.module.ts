import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentsRoutingModule } from './payments-routing.module';
import { ListComponent } from './list/list.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [
    ListComponent, 
    ConfirmComponent, 
    ViewComponent
  ],
  imports: [
    CommonModule,
    PaymentsRoutingModule
  ]
})
export class PaymentsModule { }
