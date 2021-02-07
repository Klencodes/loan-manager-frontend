﻿export enum Role {
    User = 'User',
    Admin = 'Admin'
}
export class Account {
    id: string;
    title: string;
    firstName: string;
    lastName: string;
    email: string;
    role: Role;
    jwtToken?: string;
}