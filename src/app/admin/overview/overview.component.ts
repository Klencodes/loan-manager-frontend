import { AccountService } from '../../services/account.service';
import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Account } from 'src/app/models';

@Component({ templateUrl: 'overview.component.html' })
export class OverviewComponent implements OnInit{
    accounts: any[];
    count: number;

    constructor(private accountService: AccountService) {}

    ngOnInit() {
       this.getAllUsers();
    }

    getAllUsers(){
        this.accountService.getAll().pipe(first())
        .subscribe((result:Account[]) =>{
            this.accounts = result['accounts'];
            this.count = result['count']
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