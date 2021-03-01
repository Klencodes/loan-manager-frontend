import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoansRoutingModule } from './loans-routing.module';

import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { MaterialModule } from 'src/app/components/modules';
import { AddEditDocComponent } from './add-edit-doc/add-edit-doc.component';
import { ApproveComponent } from './approve/approve.component';


@NgModule({
  declarations: [
    ListComponent, 
    ViewComponent, 
    AddEditDocComponent, 
    ApproveComponent
  ],

  imports: [
    CommonModule,
    LoansRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class LoansModule { }
