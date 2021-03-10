import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoicesRoutingModule } from './invoices-routing.module';
import { ListComponent } from './list/list.component';
import { RequestComponent } from './request/request.component';


@NgModule({
  declarations: [
  ListComponent,
  RequestComponent
],
  imports: [
    CommonModule,
    InvoicesRoutingModule
  ]
})
export class InvoicesModule { }
