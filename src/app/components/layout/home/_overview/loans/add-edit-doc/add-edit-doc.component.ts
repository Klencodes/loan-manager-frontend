import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Doc, Loan } from 'src/app/models';
import { LoanService } from 'src/app/services/_index';
import { ToastrService } from 'ngx-toastr';


@Component({
  templateUrl: './add-edit-doc.component.html',
})
export class AddEditDocComponent implements OnInit {
  loading: Boolean;
  submitted: Boolean = false;
  isAddMode: Boolean;
  idCards = [ 'Ghana Card', "Voter's Card", 'Health Insurance', 'Passport Card', ];
  loanId: string;
  docId: string;
  loanDetails: Loan;
  documentForm: FormGroup;
  docs: Doc[];
  documentRes: Doc;
  message: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private loanService: LoanService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.loanId = params.loanId;
      this.docId = params.docId;
      if (!this.isAddMode) {
        this.loanService.getDocument(this.loanId, this.docId).subscribe((res) => {
            this.documentRes = res['getDoc'];
            this.documentForm.patchValue({
              idCard: this.documentRes.idCard,
              idNumber: this.documentRes.idNumber,
            });
          });
      }
    });

    this.isAddMode = !this.docId;
    this.documentForm = this.formBuilder.group({
      idCard: ['', [Validators.required]],
      idNumber: ['', [Validators.required]],
    });

    this.getLoan();

  }

  getLoan(){
    this.loanService.getLoan(this.loanId).subscribe((res: Loan[]) => {
      this.loanDetails = res['loan'];
    });
  }

  createDocument() {
    this.loanService.createDocument(this.loanId, this.documentForm.value).subscribe((res: Doc) => {
      this.message = res.message
      this.router.navigate(['/loans/view', this.loanId]);
      this.toastr.success(this.message, 'Sucessful')
    })
  }
   
  updateDocument() {
    this.loanService.updateDocument(this.loanId, this.documentForm.value, this.docId).subscribe((res: Doc) => {
      this.message = res.message
      this.router.navigate(['/loans/view', this.loanId]);
      this.toastr.success(this.message, 'Sucessful')
    })
  }

  onSubmit() {
    this.submitted = true;
    //reset alert service on submit
    this.toastr.clear();
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
