import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AccountService, AlertService } from 'src/app/services/_index';
import { MustMatch } from 'src/app/validators';
import { ToastrService } from 'ngx-toastr';


@Component({ templateUrl: 'update.component.html' })
export class UpdateComponent implements OnInit {
    account = this.accountService.accountValue;
    form: FormGroup;
    loading = false;
    submitted = false;
    deleting = false;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private accountService: AccountService,
        private alertService: AlertService,
        private toastr: ToastrService
    ) { }

    ngOnInit() {
        this.form = this.formBuilder.group({
            title: [this.account.title, Validators.required],
            firstName: [this.account.firstName, Validators.required],
            lastName: [this.account.lastName, Validators.required],
            email: [this.account.email, [Validators.required, Validators.email]],
            phoneNumber: [this.account.phoneNumber, Validators.required],
            jobTitle: [this.account.jobTitle, Validators.required],
            department: [this.account.department, Validators.required],
            dob: [this.account.dob, Validators.required],
            address: [this.account.address, Validators.required],
            city: [this.account.city, Validators.required],
            state: [this.account.state, Validators.required],
            country: [this.account.country, Validators.required],
            password: ['', [Validators.minLength(6)]],
            confirmPassword: ['']
        }, {
            validator: MustMatch('password', 'confirmPassword')
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }

    onSubmit() {
        this.submitted = true;

        // reset alerts on submit
        this.alertService.clear();

        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }
        this.updateProfile();
    }

    updateProfile(){
        this.loading = true;
        this.accountService.update(this.account.id, this.form.value)
          .pipe(first()).subscribe({
            next: () => {
                this.toastr.success('Profile update successful', 'Succssful'), {
                keepAfterRouteChange: true,
              };
              this.router.navigate(['../'], { relativeTo: this.route });
            },
            error: (error) => {
                this.toastr.error(error);
              this.loading = false;
            },
          });
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