import { Component } from '@angular/core';

import { AccountService } from './services/_index';
import { Account, Role } from './models';
import { NavigationEnd, Router } from '@angular/router';

@Component({ 
    selector: 'app-root',
    templateUrl: 'app.component.html' 
})

export class AppComponent {
    Role = Role;
    account: Account;

    constructor(
        private accountService: AccountService,
        private router: Router,
        ) {
        this.accountService.account.subscribe(x => this.account = x);
    }

    logout() {
        this.accountService.logout();
    }

    ngOnInit() {
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0)
        });
    }
}
