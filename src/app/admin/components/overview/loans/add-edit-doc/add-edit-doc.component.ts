import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Doc, Loan } from 'src/app/models';
import { LoanService, AlertService } from 'src/app/services/_index';
import { ToastrService } from 'ngx-toastr';


@Component({ templateUrl: './add-edit-doc.component.html'})
export class AddEditDocComponent implements OnInit {

  loading: Boolean;
  submitted: Boolean = false;
  isAddMode: Boolean;
  idCards = [ 'Ghana Card', 'Voter Card', 'Ecowas Card', 'Health Insurance','Visa Card', 'Passport Card', ];
  loanId: string;
  docId: string;
  loanDetails: any;
  documentForm: FormGroup;
  docs: any;
  documentRes: Doc;
  message: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private loanService: LoanService,
    private alertService: AlertService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
        this.loanId = params.loanId;
        this.docId = params.docId;
        if (!this.isAddMode) {
          this.loanService.getDoc(this.loanId, this.docId).subscribe((res) => {
            this.documentRes = res['getDoc']
            this.documentForm.patchValue({
              idCard: this.documentRes.idCard,
              idNumber: this.documentRes.idNumber
            })
          })
        }
      }
    );

    this.isAddMode = !this.docId;
    this.documentForm = this.formBuilder.group({
      idCard: ['', [Validators.required]],
      idNumber: ['', [Validators.required]],
    });

    this.getLoanById();
  }

  getLoanById() {
    this.loanService.getById(this.loanId).subscribe((res: Loan[]) => {
      this.loanDetails = res['loans'];
    });
  }

  addDocument() {
    this.loanService.addDoc(this.loanId, this.documentForm.value).subscribe((res: Doc) => {
      this.message = res.message
      this.router.navigate(['/admin/loans/view', this.loanId]);
      this.toastr.success(this.message , 'Success')
    })
  }
   
  updateDocument() {
    this.loanService.updateDoc(this.loanId, this.documentForm.value, this.docId).subscribe((res: Doc) => {
      this.message = res.message
      this.router.navigate(['/admin/loans/view', this.loanId]);
      this.toastr.success(this.message , 'Success')
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
      this.addDocument();
    }else{
      this.updateDocument()
    }
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.documentForm.controls;
  }
  
}
