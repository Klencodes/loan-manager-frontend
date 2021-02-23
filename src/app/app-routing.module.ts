import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/layout/home';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { Role } from './models';

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'auth', loadChildren: () => import('./components/layout/auth/auth.module').then(x => x.AuthModule) },
    { path: 'account', loadChildren: () => import('./components/layout/account/account.module').then(x => x.AccountModule), canActivate: [AuthGuard] },
    { path: 'admin', loadChildren:() => import('./admin/admin.module').then(x => x.AdminModule), canActivate: [AuthGuard], data: { roles: [Role.Admin] } },

    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
