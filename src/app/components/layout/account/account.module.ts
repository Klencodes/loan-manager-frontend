import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { ForgotPasswordComponent } from './forgot-pass/forgot-password.component';
import { ResetPasswordComponent } from './reset-pass/reset-password.component';

@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent,
        VerifyEmailComponent,
        ForgotPasswordComponent,
        ResetPasswordComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AccountRoutingModule
    ]

})
export class AccountModule { }