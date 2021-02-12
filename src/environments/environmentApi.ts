export const environment = {
    production: false,
    BASE_URL: 'http://localhost:4000',
    ACCOUNTS_ENDPOINT: 'http://localhost:4000/accounts/',

    ACCOUNTS: {
        USERS_ONLY: 'users',
        REGISTER: 'register',
        VERIFY_EMAIL: 'verify-email',
        LOGIN: 'login',
        FORGOT_PASSWORD: 'forgot-password',
        RESET_PASSWORD: 'reset-password',
        VALIDATE_RESET_TOKEN: 'validate-reset-token',
        REFRESH_TOKEN: 'refresh-token',
        REVOKE_TOKEN: 'revoke-token'
    }
  };
