import { AddContactElements } from "../page-elements/add-acontact-elements";
const addContactElements = new AddContactElements();
export class AddContactActions {

  async verifyAddContactTitleIsDisplayed() {
    try {
      const addContactTitle = addContactElements.addContactTitle();
      await addContactTitle.waitForDisplayed();
      return await addContactTitle.isDisplayed();
    } catch (error) {
      return false;
    }
  }

  async getErrorMessageText() {
    await addContactElements.errorMessageLabel().waitForDisplayed();
    const errorText = await addContactElements.errorMessageLabel().getText();
    return errorText;
  }

  async fillFirstNameField(firstName) {
    await addContactElements.firstNameField().waitForClickable();
    await addContactElements.firstNameField().addValue(firstName);
  }

  async fillLastNameField(lastName) {
    await addContactElements.lastNameField().waitForClickable();
    await addContactElements.lastNameField().addValue(lastName);
  }

  async fillEmailField(email) {
    await addContactElements.emailField().waitForClickable();
    await addContactElements.emailField().addValue(email);
  }

  async fillBirthDateField(birthDate) {
    await addContactElements.birthDateField().waitForClickable();
    await addContactElements.birthDateField().addValue(birthDate);
  }

  async fillPhoneField(phone) {
    await addContactElements.phoneField().waitForClickable();
    await addContactElements.phoneField().addValue(phone);
  }

  async fillStreet1Field(street1) {
    await addContactElements.street1Field().waitForClickable();
    await addContactElements.street1Field().addValue(street1);
  }

  async fillCityField(city) {
    await addContactElements.cityField().waitForClickable();
    await addContactElements.cityField().addValue(city);
  }

  async fillStateField(state) {
    await addContactElements.stateField().waitForClickable();
    await addContactElements.stateField().addValue(state);
  }

  async fillPostalCodeField(postalCode) {
    await addContactElements.postalCodeField().waitForClickable();
    await addContactElements.postalCodeField().addValue(postalCode);
  }

  async fillCountryField(country) {
    await addContactElements.countryField().waitForClickable();
    await addContactElements.countryField().addValue(country);
  }

  async clickSubmitButton() {
    await addContactElements.submitButton().waitForClickable();
    await addContactElements.submitButton().click();
  }
}