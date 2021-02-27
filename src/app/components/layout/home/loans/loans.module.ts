import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoansRoutingModule } from './loans-routing.module';
import { RequestComponent } from './request/request.component';
import { ListComponent } from './list/list.component';
import { MaterialModule } from 'src/app/components/modules';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RequestComponent, 
    ListComponent 
  ],
  imports: [
    CommonModule,
    LoansRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class LoansModule { }
