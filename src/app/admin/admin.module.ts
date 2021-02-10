import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SubNavComponent } from './subnav/subnav.component';
import { OverviewComponent } from './overview/overview.component';
import { MaterialModule } from '../components/modules/material.module';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AdminRoutingModule,
        MaterialModule
    ],
    declarations: [
        SubNavComponent,
        AdminComponent,
        OverviewComponent
    ]
})
export class AdminModule { }