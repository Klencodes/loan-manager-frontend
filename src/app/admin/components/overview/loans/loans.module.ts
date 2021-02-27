import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoansRoutingModule } from './loans-routing.module';

import { AddEditComponent } from './add-edit/add-edit.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { MaterialModule } from 'src/app/components/modules';


@NgModule({
  declarations: [
    AddEditComponent, 
    ListComponent, 
    ViewComponent
  ],

  imports: [
    CommonModule,
    LoansRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class LoansModule { }
