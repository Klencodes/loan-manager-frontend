import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEditDocComponent } from './add-edit-doc/add-edit-doc.component';
import { ApproveComponent } from './approve/approve.component';

import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'approve', component: ApproveComponent },
  { path: 'view/:id', component: ViewComponent },
  { path: 'approve/:id', component: ApproveComponent },
  { path: ':loanId/document', component: AddEditDocComponent },
  { path: ':loanId/document/:docId', component: AddEditDocComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoansRoutingModule { }
