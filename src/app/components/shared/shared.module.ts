import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  declarations: [
    HeaderNavComponent,
    AlertComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderNavComponent,
    AlertComponent
  ]
})
export class SharedModule { }
