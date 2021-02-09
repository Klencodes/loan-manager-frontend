import { Component, OnInit } from '@angular/core';

import { AccountService } from 'src/app/services';

@Component({ templateUrl: 'details.component.html' })
export class DetailsComponent implements OnInit{
    account = this.accountService.accountValue;

    constructor(private accountService: AccountService) { }

    ngOnInit(){
    }
}