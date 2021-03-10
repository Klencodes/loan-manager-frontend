import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent, OverviewComponent } from './components/layout/home';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { Role } from './models';
import { NotFoundComponent } from './components/errors/not-found/not-found.component';

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard],
      children: [
        {path: '', component: OverviewComponent },
        { path: 'loans', loadChildren: () => import('./components/layout/home/_overview/loans/loans.module').then(m => m.LoansModule) },
        { path: 'payments', loadChildren: () => import('./components/layout/home/_overview/payments/payments.module').then(m => m.PaymentsModule) },
        { path: 'invoices', loadChildren: () => import('./components/layout/home/_overview/invoices/invoices.module').then(m => m.InvoicesModule) },
        { path: 'reports', loadChildren: () => import('./components/layout/home/_overview/reports/reports.module').then(m => m.ReportsModule) },
        { path: 'settings', loadChildren: () => import('./components/layout/home/_overview/settings/settings.module').then(m => m.SettingsModule) },        
      ] 
    },
    
    { path: 'auth', loadChildren: () => import('./components/layout/auth/auth.module').then(m => m.AuthModule) },
    { path: 'account', loadChildren: () => import('./components/layout/account/account.module').then(m => m.AccountModule), canActivate: [AuthGuard] },
    { path: 'admin', loadChildren:() => import('./admin/admin.module').then(m => m.AdminModule), canActivate: [AuthGuard], data: { roles: [Role.Admin] } },

    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
