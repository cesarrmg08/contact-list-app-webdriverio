import { LoginActions } from "../actions/login-actions";
const loginActions = new LoginActions();

describe('My Login application', () => {
    it('Log in with valid credentials', async () => {
        //await browser.url('/');
        await loginActions.fillEmailField();
        await loginActions.fillPasswordField();
    })
})

