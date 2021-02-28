import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoansRoutingModule } from './loans-routing.module';
import { MaterialModule } from 'src/app/components/modules';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewLoanComponent } from './view-loan/view-loan.component';
import { ListLoansComponent } from './list-loans/list-loans.component';
import { RequestLoanComponent } from './request-loan/request-loan.component';
import { AddEditDocComponent } from './add-edit-doc/add-edit-doc.component';


@NgModule({
  declarations: [
    ViewLoanComponent,
    ListLoansComponent, 
    RequestLoanComponent, 
    AddEditDocComponent 
  ],
  
  imports: [
    CommonModule,
    LoansRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class LoansModule { }
