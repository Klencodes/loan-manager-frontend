export const environment = {
  production: true,

  BASE_URL: 'https://test-loan-api.herokuapp.com',
  
  ACCOUNTS_ROUTE: '/accounts',
  LOANS_ROUTE: '/loans',
  PAYMENTS_ROUTE: '/payments',

  ACCOUNTS: {
    USERS_ONLY: '/users',
    ADMINS_ONLY: '/admins',
    REGISTER: '/register',
    VERIFY_EMAIL: '/verify-email',
    LOGIN: '/login',
    FORGOT_PASSWORD: '/forgot-password',
    RESET_PASSWORD: '/reset-password',
    VALIDATE_RESET_TOKEN: '/validate-reset-token',
    REFRESH_TOKEN: '/refresh-token',
    REVOKE_TOKEN: '/revoke-token',
  },

  LOANS: {
    GET_ALL_LOANS: '/all-loans',
    ADMIN_GET_LOAN: '/find-loan',
    ADMIN_ADD_DOCUMENT: '/add-document',
    ADMIN_GET_DOCUMENT: '/get-document',
    ADMIN_UPDATE_DOCUMENT: '/update-document',
    LOAN_DOCUMENTS: '/documents',
    REQUEST_LOAN: '/request',
  },

  PAYMENTS: {
    GET_ALL_PAYMENTS: '/all-payments',
    ADMIN_GET_PAYMENTS: '/find-payments',
    CONFIRM_PAYMENT: '/confirm-payment',
    GET_LOAN_PAYMENTS: '/loan-payments',
  }

};