export const environment = {
  production: false,
  BASE_URL: 'http://localhost:4000',
  ACCOUNTS_ENDPOINT: 'http://localhost:4000/accounts/',
  LOANS_ENDPOINT: 'loans',

  ACCOUNTS: {
    USERS_ONLY: 'users',
    ADMINS_ONLY: 'admins',
    REGISTER: 'register',
    VERIFY_EMAIL: 'verify-email',
    LOGIN: 'login',
    FORGOT_PASSWORD: 'forgot-password',
    RESET_PASSWORD: 'reset-password',
    VALIDATE_RESET_TOKEN: 'validate-reset-token',
    REFRESH_TOKEN: 'refresh-token',
    REVOKE_TOKEN: 'revoke-token',
  },

  LOANS: {
    GET_ALL_LOANS: 'find-all',
    ADMIN_GET_LOAN: 'find',
    ADMIN_ADD_DOCUMENT: 'add-document',
    ADMIN_GET_DOCUMENT: 'get-document',
    ADMIN_UPDATE_DOCUMENT: 'update-document',
    LOAN_DOCUMENTS: 'documents',
    REQUEST_LOAN: 'request',
  },
};
