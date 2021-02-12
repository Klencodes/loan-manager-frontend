import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, finalize } from 'rxjs/operators';

import { environment } from 'src/environments//environmentApi';
import { Account } from 'src/app/models';

const ACCOUNTS_ENDPOINT = environment.ACCOUNTS_ENDPOINT

@Injectable({ providedIn: 'root' })
export class AccountService {
    private accountSubject: BehaviorSubject<Account>;
    public account: Observable<Account>;

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        this.accountSubject = new BehaviorSubject<Account>(null);
        this.account = this.accountSubject.asObservable();
    }

    public get accountValue(): Account {
        return this.accountSubject.value;
    }

    login(email: string, password: string) {
        let url = ACCOUNTS_ENDPOINT+environment.ACCOUNTS.LOGIN
        return this.http.post<any>(url, { email, password }, { withCredentials: true })
            .pipe(map(account => {
                this.accountSubject.next(account);
                this.startRefreshTokenTimer();
                return account;
            }));
    }

    logout() {
        let url = ACCOUNTS_ENDPOINT+environment.ACCOUNTS.REVOKE_TOKEN
        this.http.post<any>(url, {}, { withCredentials: true }).subscribe();
        this.stopRefreshTokenTimer();
        this.accountSubject.next(null);
        this.router.navigate(['/auth/login']);
    }

    refreshToken() {
        let url = ACCOUNTS_ENDPOINT+environment.ACCOUNTS.REFRESH_TOKEN
        return this.http.post<any>(url, {}, { withCredentials: true })
            .pipe(map((account) => {
                this.accountSubject.next(account);
                this.startRefreshTokenTimer();
                return account;
            }));
    }

    register(account: Account) {
        let url = ACCOUNTS_ENDPOINT+environment.ACCOUNTS.REGISTER
        return this.http.post(url, account);
    }

    verifyEmail(token: string) {
        let url = ACCOUNTS_ENDPOINT+environment.ACCOUNTS.VERIFY_EMAIL
        return this.http.post(url, { token });
    }
    
    forgotPassword(email: string) {
        let url = ACCOUNTS_ENDPOINT+environment.ACCOUNTS.FORGOT_PASSWORD
        return this.http.post(url, { email });
    }
    
    validateResetToken(token: string) {
        let url = ACCOUNTS_ENDPOINT+environment.ACCOUNTS.VALIDATE_RESET_TOKEN
        return this.http.post(url, { token });
    }
    
    resetPassword(token: string, password: string, confirmPassword: string) {
        let url = ACCOUNTS_ENDPOINT+environment.ACCOUNTS.RESET_PASSWORD
        return this.http.post(url, { token, password, confirmPassword });
    }

    getAll() {
        return this.http.get<Account[]>(ACCOUNTS_ENDPOINT);
    }
    getUsersOnly() {
        let url = ACCOUNTS_ENDPOINT+ environment.ACCOUNTS.USERS_ONLY
        return this.http.get<Account[]>(url);
    }

    getById(id: string) {
        return this.http.get<Account>(`${ACCOUNTS_ENDPOINT}/${id}`);
    }
    
    create(params) {
        return this.http.post(ACCOUNTS_ENDPOINT, params);
    }
    
    update(id, params) {
        return this.http.put(`${ACCOUNTS_ENDPOINT}/${id}`, params)
            .pipe(map((account: any) => {
                // update the current account if it was updated
                if (account.id === this.accountValue.id) {
                    // publish updated account to subscribers
                    account = { ...this.accountValue, ...account };
                    this.accountSubject.next(account);
                }
                return account;
            }));
    }
    
    delete(id: string) {
        return this.http.delete(`${ACCOUNTS_ENDPOINT}/${id}`)
            .pipe(finalize(() => {
                // auto logout if the logged in account was deleted
                if (id === this.accountValue.id)
                    this.logout();
            }));
    }

    // helper methods

    private refreshTokenTimeout;

    private startRefreshTokenTimer() {
        // parse json object from base64 encoded jwt token
        const jwtToken = JSON.parse(atob(this.accountValue.jwtToken.split('.')[1]));

        // set a timeout to refresh the token a minute before it expires
        const expires = new Date(jwtToken.exp * 1000);
        const timeout = expires.getTime() - Date.now() - (60 * 1000);
        this.refreshTokenTimeout = setTimeout(() => this.refreshToken().subscribe(), timeout);
    }

    private stopRefreshTokenTimer() {
        clearTimeout(this.refreshTokenTimeout);
    }
}