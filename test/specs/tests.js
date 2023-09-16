import { assert } from "chai";
import { LoginActions } from "../actions/login-actions";
import { ContactListActions } from "../actions/contact-list-actions";
import { AddContactActions } from "../actions/add-acontact-actions";
import user from "../../utils/data/users.json";
import contact from "../../utils/data/contact.json";
const loginActions = new LoginActions(); 
const contactListActions = new ContactListActions(); 
const addContactActions = new AddContactActions(); 
const { faker } = require('@faker-js/faker');

describe('Thinking Tester Contact List', () => {

    it('Log in with invalid credentials', async () => {
        await loginActions.fillEmailField(user.user_1.email);
        await loginActions.fillPasswordField(user.user_1.password);
        await loginActions.clickSubmitButton();
        assert.equal(await loginActions.verifyInvalidCredentialsLabelIsDisplayed(), true );
    });

    it('Log in with valid credentials', async () => {
        await loginActions.fillEmailField(user.user_2.email);
        await loginActions.fillPasswordField(user.user_2.password);
        await loginActions.clickSubmitButton();
        assert.equal(await contactListActions.verifyContactListTileIsDisplayed(), true );
    });

    it('Add a New Contact only with required Fields', async () => {
        browser.url('/contactList');
        const initialRows = await contactListActions.getNumberOfContactRows();
        await contactListActions.clickAddContactButton();
        await addContactActions.fillFirstNameField(faker.person.firstName());
        await addContactActions.fillLastNameField(faker.person.lastName());
        await addContactActions.clickSubmitButton();
        const UpdatedRows = await contactListActions.getNumberOfContactRows();
        assert.equal(UpdatedRows, initialRows + 1);
    });

    it('Add a New Contact required and optional fields', async () => {
        browser.url('/contactList');
        const initialRows = await contactListActions.getNumberOfContactRows();
        await contactListActions.clickAddContactButton();
        await addContactActions.fillFirstNameField(faker.person.firstName());
        await addContactActions.fillLastNameField(faker.person.lastName());
        await addContactActions.fillCountryField(faker.location.country());
        await addContactActions.fillCityField(faker.location.city());
        await addContactActions.fillStreet1Field(faker.location.street());
        await addContactActions.clickSubmitButton();
        const UpdatedRows = await contactListActions.getNumberOfContactRows();
        assert.equal(UpdatedRows, initialRows + 1);
    });

    it('Add a New Contact with invalid Postal Code', async () => {
        browser.url('/contactList');
        await contactListActions.clickAddContactButton();
        await addContactActions.fillFirstNameField(faker.person.firstName());
        await addContactActions.fillLastNameField(faker.person.lastName());
        await addContactActions.fillPostalCodeField(contact.invalidContact.postalCode);
        await addContactActions.clickSubmitButton();
        const errorMessage = await addContactActions.getErrorMessageText();
        assert.equal(errorMessage.includes(contact.errorMessages.postalCode), true);
    });

    it('Add a New Contact with invalid Date of Birth', async () => {
        browser.url('/contactList');
        await contactListActions.clickAddContactButton();
        await addContactActions.fillFirstNameField(faker.person.firstName());
        await addContactActions.fillLastNameField(faker.person.lastName());
        await addContactActions.fillBirthDateField(contact.invalidContact.birthdate);
        await addContactActions.clickSubmitButton();
        const errorMessage = await addContactActions.getErrorMessageText();
        assert.equal(errorMessage.includes(contact.errorMessages.birthdate), true);
    });

    it('Add a New Contact with multiple invalid Fields', async () => {
        browser.url('/contactList');
        await contactListActions.clickAddContactButton();
        await addContactActions.fillFirstNameField(faker.person.firstName());
        await addContactActions.fillLastNameField(faker.person.lastName());
        await addContactActions.fillBirthDateField(contact.invalidContact.birthdate);
        await addContactActions.fillPostalCodeField(contact.invalidContact.postalCode);
        await addContactActions.clickSubmitButton();
        const errorMessage = await addContactActions.getErrorMessageText();
        assert.equal(errorMessage.includes(contact.errorMessages.birthdate), true);
        assert.equal(errorMessage.includes(contact.errorMessages.postalCode), true);
    });
})

