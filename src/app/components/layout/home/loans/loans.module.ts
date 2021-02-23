import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoansRoutingModule } from './loans-routing.module';
import { RequestComponent } from './request/request.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    RequestComponent, 
    ListComponent 
  ],
  imports: [
    CommonModule,
    LoansRoutingModule
  ]
})
export class LoansModule { }
