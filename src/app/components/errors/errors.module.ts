import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CommingSoonComponent } from './comming-soon/comming-soon.component';
import { ServerErrorComponent } from './server-error/server-error.component';



@NgModule({
  declarations: [
    NotFoundComponent,
    CommingSoonComponent,
    ServerErrorComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    NotFoundComponent
  ]
})
export class ErrorPagesModule { }
