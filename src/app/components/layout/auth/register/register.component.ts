import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AccountService } from 'src/app/services/_index';
import { MustMatch } from 'src/app/validators';
import { ToastrService } from 'ngx-toastr';


@Component({ templateUrl: 'register.component.html' })
export class RegisterComponent implements OnInit {
    form: FormGroup;
    loading = false;
    submitted = false;
    hidePassword = true;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private accountService: AccountService,
        private toastr: ToastrService
        ) { }

    ngOnInit() {
        this.form = this.formBuilder.group({
            title: ['', Validators.required],
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            phoneNumber: ['', Validators.required],
            jobTitle: ['', Validators.required],
            department: ['', Validators.required],
            dob: ['', Validators.required],
            address: ['', Validators.required],
            city: ['', Validators.required],
            state: ['', Validators.required],
            country: ['', Validators.required],
            facebook: [''],
            linkedin: [''],
            password: ['', [Validators.minLength(6),  Validators.required ]],
            confirmPassword: [''],
            acceptTerms: ['', Validators.required],
        }, {
            validator: MustMatch('password', 'confirmPassword')
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }

    onSubmit() {
        this.submitted = true;
        
        this.toastr.clear();

        if (this.form.invalid) {
            return;
        }
        this.register();
    }
    register(){
        this.loading = true;
        this.accountService.register(this.form.value).pipe(first())
            .subscribe({
                next: () => {
                    this.toastr.success('Registration successful, please check your email for verification instructions', 'Successful'),{ keepAfterRouteChange: true };
                    this.router.navigate(['../login'], { relativeTo: this.route });
                },
                error: error => {
                    this.toastr.error(error);
                    this.loading = false;
                }
            });
    }
}