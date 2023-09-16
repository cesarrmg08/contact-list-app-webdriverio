import { assert } from "chai";
import { LoginActions } from "../actions/login-actions";
import { ContactListActions } from "../actions/contact-list-actions";
import user from "../../utils/data/users.json";
const loginActions = new LoginActions(); 
const contactListActions = new ContactListActions(); 

describe('Thinking Tester Contact List', () => {
    it('Log in with invalid credentials', async () => {
        await loginActions.fillEmailField(user.user_1.email);
        await loginActions.fillPasswordField(user.user_1.password);
        await loginActions.clickSubmitButton();
        assert.equal(await loginActions.verifyInvalidCredentialsLabelIsDisplayed(), true );
    })

    it('Log in with valid credentials', async () => {
        await loginActions.fillEmailField(user.user_2.email);
        await loginActions.fillPasswordField(user.user_2.password);
        await loginActions.clickSubmitButton();
        assert.equal(await contactListActions.verifyContactListTileIsDisplayed(), true );
    })
})

