import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs/operators';

import { AccountService } from 'src/app/services/_index';

@Component({ templateUrl: 'details.component.html' })

export class DetailsComponent implements OnInit{
    
    deleting = false;

    account = this.accountService.accountValue;

    constructor(
        private accountService: AccountService,
        private toastr: ToastrService

        ) { }

    ngOnInit(){
        console.log(this.account)
    }

    onDelete() {
        if (confirm('Are you sure?')) {
            this.deleting = true;
            this.accountService.delete(this.account.id)
                .pipe(first()).subscribe(() => {
                    this.toastr.success('Account deleted successfully','Succssful'), { keepAfterRouteChange: true };
                });
        }
    }
}