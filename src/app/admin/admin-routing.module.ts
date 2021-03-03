import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubNavComponent } from './components/subnav/subnav.component'
import { OverviewComponent } from './components/overview/overview.component';
import { AdminComponent } from './admin.component';

const routes: Routes = [
    { path: '', component: SubNavComponent, outlet: 'subnav' },
    {
        path: '', component: AdminComponent,
        children: [
            { path: '', component: OverviewComponent },
            { path: 'accounts', loadChildren: () => import('./components/accounts/accounts.module').then(x => x.AccountsModule) },
            { path: 'loans', loadChildren: () => import('./components/overview/loans/loans.module').then(m => m.LoansModule) },
            { path: 'payments', loadChildren: () => import('./components/overview/payments/payments.module').then(m => m.PaymentsModule) },
            { path: 'invoices', loadChildren: () => import('./components/overview/invoices/invoices.module').then(m => m.InvoicesModule) },
            { path: 'reports', loadChildren: () => import('./components/overview/reports/reports.module').then(m => m.ReportsModule) },
        
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }