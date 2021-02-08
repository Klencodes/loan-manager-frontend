import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SubNavComponent } from './subnav.component';
import { OverviewComponent } from './overview/overview.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AdminRoutingModule,
    ],
    declarations: [
        SubNavComponent,
        AdminComponent,
        OverviewComponent
    ]
})
export class AdminModule { }