import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfirmComponent } from './confirm/confirm.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';


const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'view/:id', component: ViewComponent },
  { path: 'confirm/:id', component: ConfirmComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentsRoutingModule { }
