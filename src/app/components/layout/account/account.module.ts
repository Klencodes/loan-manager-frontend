import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { DetailsComponent } from './details/details.component';
import { UpdateComponent } from './update/update.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AccountRoutingModule
    ],
    declarations: [
        DetailsComponent,
        UpdateComponent
    ]
})
export class AccountModule { }