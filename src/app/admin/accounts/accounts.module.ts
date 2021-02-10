import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { ListComponent } from './list-accounts/list.component';
import { AddEditComponent } from './add-edit/add-edit.component';
import { ViewComponent } from './view-account/view.component';
import { MaterialModule } from 'src/app/components/modules/material.module';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AccountsRoutingModule,
        MaterialModule
    ],
    declarations: [
        ListComponent,
        AddEditComponent,
        ViewComponent
    ]
})
export class AccountsModule { }