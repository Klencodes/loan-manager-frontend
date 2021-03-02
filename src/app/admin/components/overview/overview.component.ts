import { AccountService } from 'src/app/services/account.service';
import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { LoanService } from 'src/app/services/_index';
import { ToastrService } from 'ngx-toastr';

@Component({ templateUrl: 'overview.component.html' })
export class OverviewComponent implements OnInit{
    accounts: any;
    countAccounts: number;
    users: any;
    countUsers: number;
    $loansObj: any;
    totalLoans: Number
  

    constructor(
        private accountService: AccountService,
        private loanService: LoanService,
        private toastr: ToastrService
        ) {}

    ngOnInit() {
        this.onLoadFunctions()
    }

    onLoadFunctions(){
        this.getAllAccounts();
        this.getAllDbLoans();
    }

    getAllAccounts(){
        this.accountService.getAll().pipe(first())
        .subscribe((result:any) =>{
            this.accounts = result.accounts;
            this.countAccounts = result.count;
            // console.log(result, 'Result Object')
        });
    }
    getAllDbLoans(){
        this.loanService.getAllLoans().subscribe((res) => {
          this.$loansObj = res;
          this.toastr.success('Overview returned successfully', 'Success')
          this.totalLoans =this.$loansObj.totalLoans
          console.log(this.totalLoans)
        })
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
        this.accountService.delete(id).pipe(first())
            .subscribe(() => {
                this.accounts = this.accounts.filter(x => x.id !== id) 
                this.toastr.success('Account Deleted Successfully' , 'Success')
            });
    }
 }