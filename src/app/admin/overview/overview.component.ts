import { AccountService } from '../../services/account.service';
import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Account, Role } from 'src/app/models';

@Component({ templateUrl: 'overview.component.html' })
export class OverviewComponent implements OnInit{
    accounts: any;
    countAccounts: number;
    users: any;
    countUsers: number;

    constructor(private accountService: AccountService) {}

    ngOnInit() {
       this.getAllAccounts();
       this.getUsersOnly();
    }

    getAllAccounts(){
        this.accountService.getAll().pipe(first())
        .subscribe((result:any) =>{
            this.accounts = result.accounts;
            this.countAccounts = result.count;
            // console.log(result, 'Result Object')
        });
    }
    getUsersOnly(){
        this.accountService.getUsersOnly().pipe(first())
        .subscribe((result:any) =>{
            this.users = result.users;
            this.countUsers = result.count;
            // console.log(result, 'Result Object')
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