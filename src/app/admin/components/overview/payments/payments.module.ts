import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentsRoutingModule } from './payments-routing.module';
import { ListComponent } from './list/list.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { ViewComponent } from './view/view.component';
import { MaterialModule } from 'src/app/components/modules';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListComponent, 
    ConfirmComponent, 
    ViewComponent
  ],
  imports: [
    CommonModule,
    PaymentsRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class PaymentsModule { }
