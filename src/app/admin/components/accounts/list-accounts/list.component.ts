﻿import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { AccountService } from 'src/app/services/_index';
import { Account } from 'src/app/models';

@Component({ templateUrl: 'list.component.html' })
export class ListComponent implements OnInit {

    accounts: Account[];
    count: number;
    isDeleting: Boolean = false;
    message: string;

    constructor(
        private accountService: AccountService,
        private toastr: ToastrService
        ) {}

    ngOnInit() {
        this.getAllUsers();
     }
 
    getAllUsers(){
         this.accountService.getAll().pipe(first())
         .subscribe((result:Account[]) =>{
             this.accounts = result['accounts'];
             this.count = result['count']
             this.message = result['message']
             this.toastr.success(this.message, 'Successful') 
         });
    }

    deleteAccount(id: string) {
        const account = this.accounts.find(x => x.id === id);
        account.isDeleting = true;
        this.accountService.delete(id)
            .pipe(first())
            .subscribe(() => {
                this.accounts = this.accounts.filter(x => x.id !== id) 
            });
    }
}