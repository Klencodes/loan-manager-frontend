import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEditDocComponent } from './add-edit-doc/add-edit-doc.component';
import { ListLoansComponent } from './list-loans/list-loans.component';
import { RequestLoanComponent } from './request-loan/request-loan.component';
import { ViewLoanComponent } from './view-loan/view-loan.component';

const routes: Routes = [
  { path: '', component: ListLoansComponent },
  { path: 'request', component: RequestLoanComponent },
  { path: 'view/:id', component: ViewLoanComponent },
  { path: ':loanId/document', component: AddEditDocComponent },
  { path: ':loanId/document/:docId', component: AddEditDocComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoansRoutingModule { }
