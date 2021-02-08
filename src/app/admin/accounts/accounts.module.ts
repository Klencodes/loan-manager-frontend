import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { ListComponent } from './list-accounts/list.component';
import { AddEditComponent } from './add-edit/add-edit.component';
import { ViewComponent } from './view-account/view.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AccountsRoutingModule
    ],
    declarations: [
        ListComponent,
        AddEditComponent,
        ViewComponent
    ]
})
export class AccountsModule { }