import { Account } from "./account";

export class Loan {
    id?: string;
    loanType: string;
    loanAmount: Number;
    created: Date;
    loanStatus: string;
    statusDate?: Date;
}