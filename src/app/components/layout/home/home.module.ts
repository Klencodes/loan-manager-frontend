import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { OverviewComponent } from './_overview/overview.component';
import { HomeComponent, LayoutComponent } from './index';



@NgModule({
  declarations: [
    OverviewComponent,
    HomeComponent,
    LayoutComponent,

  
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,

  ]
})
export class HomeModule { }
