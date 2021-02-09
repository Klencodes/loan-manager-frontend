import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/layout/home';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { Role } from './models';

const authModule = () => import('./components/layout/auth/auth.module').then(x => x.AuthModule);
const adminModule = () => import('./admin/admin.module').then(x => x.AdminModule);
const accountModule = () => import('./components/layout/account/account.module').then(x => x.AccountModule);

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'auth', loadChildren: authModule },
    { path: 'account', loadChildren: accountModule, canActivate: [AuthGuard] },
    { path: 'admin', loadChildren: adminModule, canActivate: [AuthGuard], data: { roles: [Role.Admin] } },

    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
