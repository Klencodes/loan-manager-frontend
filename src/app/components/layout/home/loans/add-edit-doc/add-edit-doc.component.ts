import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { first } from 'rxjs/operators';
import { Loan } from 'src/app/models';
import { LoanService, AlertService } from 'src/app/services/_index';

@Component({
  templateUrl: './add-edit-doc.component.html',
})
export class AddEditDocComponent implements OnInit {
  loading: Boolean;
  submitted: Boolean = false;
  isAddMode: Boolean;
  idCards = [ 'Ghana Card', 'Voter Card', 'Ecowas Card', 'Health Insurance','Visa Card', 'Passport Card', ];
  id: string;
  docId: string;
  loanDetails: any;
  documentForm: FormGroup;
  docs: any;

  constructor(
    private route: ActivatedRoute,
    private loanService: LoanService,
    private router: Router,
    private alertService: AlertService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params.id;
        this.docId = params.docId;
        console.log(this.id, 'Loan Id');
        console.log(this.docId, 'Doc Id');
      }
    );

    this.isAddMode = !this.docId;
    this.documentForm = this.formBuilder.group({
      idCard: ['', [Validators.required]],
      idNumber: ['', [Validators.required]],
    });

    if (!this.isAddMode) {
      this.loanService.getDocument(this.id, this.docId)
        .pipe(first()).subscribe((x) => this.documentForm.patchValue(x));
    }

    this.getLoan();
  }

  getLoan() {
    this.loanService.getLoan(this.id).subscribe((res: Loan[]) => {
      this.loanDetails = res['loans'];
    });
  }
  createDocument() {
    this.loanService.createDocument(this.id, this.documentForm.value)
      .pipe(first()).subscribe({
        next: () => {
          this.alertService.success('Document created successfully', { keepAfterRouteChange: true });
          this.router.navigate(['../../'], { relativeTo: this.route });
        },
        error: error => {
          this.alertService.error(error);
          this.loading = false;
        }
      });
  }
  
  
  updateDocument() {
    //TODO MAP AND PIPE DOCUMENT LOAN
    this.loanService.updateDocument(this.id, this.docId, this.documentForm.value)
    // .pipe(first()).subscribe({
    //     next: () => {
    //       this.alertService.success('Document Updated successful', { keepAfterRouteChange: true });
    //       this.router.navigate(['../../'], { relativeTo: this.route });
    //     },
    //     error: error => {
    //       this.alertService.error(error);
    //       this.loading = false;
    //     }
    // });
}

  onSubmit() {
    this.submitted = true;
    //reset alert service on submit
    this.alertService.clear();
    // stop here if form is invalid
    if (this.documentForm.invalid) {
      return;
    };
    if(this.isAddMode){
      this.createDocument();
    }else{
      this.updateDocument()
    }
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.documentForm.controls;
  }
}
