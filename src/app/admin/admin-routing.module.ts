import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubNavComponent } from './subnav/subnav.component';
import { OverviewComponent } from './overview/overview.component';
import { AdminComponent } from './admin.component';

const routes: Routes = [
    { path: '', component: SubNavComponent, outlet: 'subnav' },
    {
        path: '', component: AdminComponent,
        children: [
            { path: '', component: OverviewComponent },
            { path: 'accounts', loadChildren: () => import('./accounts/accounts.module').then(x => x.AccountsModule) }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }