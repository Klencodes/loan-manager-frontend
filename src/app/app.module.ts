import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { JwtInterceptor, ErrorInterceptor, AppInitializer } from './_helpers';
import { AccountService } from './services/_index';
import { AppComponent } from './app.component';
import { SharedModule } from './components/shared/shared.module';
import { HomeComponent, LayoutComponent } from './components/layout/home';
import { ErrorPagesModule } from './components/errors/errors.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './components/modules/material.module';
import { ToastrModule } from 'ngx-toastr';
import { HomeModule } from './components/layout/home/home.module';


@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        SharedModule,
        ErrorPagesModule,
        BrowserAnimationsModule,
        MaterialModule,
        HomeModule,

        ToastrModule.forRoot( 
            ({  timeOut: 2000,
                progressBar: true,
                progressAnimation: 'increasing',
                positionClass: 'toast-top-right'
            })
        )
    ],
    declarations: [
        AppComponent,
         
    ],
    providers: [
        { provide: APP_INITIALIZER, useFactory: AppInitializer, multi: true, deps: [AccountService] },
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }