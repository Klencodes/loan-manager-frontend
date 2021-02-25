import { Component } from '@angular/core';

import { AccountService } from 'src/app/services/_index';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    account = this.accountService.accountValue;

    constructor(private accountService: AccountService) { }
}