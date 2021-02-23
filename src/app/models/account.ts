export enum Role {
    User = 'User',
    Admin = 'Admin'
}
export class Account {
    id: string;
    title: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    jobTitle: string;
    department: string;
    dob: Date;
    address: string;
    city: string;
    state: string;
    country: string;
    acceptTerms: Boolean;
    role: Role;
    jwtToken?: string;
    isDeleting?: boolean;
}