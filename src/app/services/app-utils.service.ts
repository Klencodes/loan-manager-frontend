import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppUtilsService {

  constructor(
    private httpClient: HttpClient,

  ) { }
  allStatus = ['Pending', 'Success', 'Recovered', 'Canceled'];

  loanTypes = ['Personal Loan', 'Agriculture Loan', 'Business Loan', 'Property Loan', ];

  transactions = [
    {
      transaction: "Bank Transaction",
      paymentTypes: ["Bank Deposit", "Credit Payment", "Cheque Payment"]
    },
    {
      transaction: "Card Transaction",
      paymentTypes: ["Credit Card", "Master Card", "Visa Card", "Express Card", "Cash App"]
    },
    {
      transaction: "Other Transaction",
      paymentTypes: ["World Remit", "PayPal", "Others"]
    }
  ];
}
