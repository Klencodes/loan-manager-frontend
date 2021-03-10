import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './reports.component';
import { MaterialModule } from 'src/app/components/modules';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ReportsComponent],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class ReportsModule { }
