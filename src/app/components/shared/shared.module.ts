import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { FooterNavComponent } from './footer-nav/footer-nav.component';
import { LeftsideNavComponent } from './leftside-nav/leftside-nav.component';
import { RightsideNavComponent } from './rightside-nav/rightside-nav.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [
    HeaderNavComponent,
    FooterNavComponent,
    LeftsideNavComponent,
    RightsideNavComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  exports:[
    HeaderNavComponent,
    FooterNavComponent,
    LeftsideNavComponent,
    RightsideNavComponent,
  ]
})
export class SharedModule { }
