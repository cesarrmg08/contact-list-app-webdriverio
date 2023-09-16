import { LoginElements } from "../page-elements/login-elements";
const loginElements = new LoginElements();

export class LoginActions {
  // Type the email on the field
  async fillEmailField(email) {
    await loginElements.emailField().waitForExist();
    await loginElements.emailField().waitForClickable();
    await loginElements.emailField().addValue(email);
  }

  // Type the password on the field
  async fillPasswordField(password) {
    await loginElements.passwordField().waitForExist();
    await loginElements.passwordField().waitForClickable();
    await loginElements.passwordField().addValue(password);
  }

  async clickSubmitButton() {
    await loginElements.submitButton().waitForExist();
    await loginElements.submitButton().waitForClickable();
    await loginElements.submitButton().click();
  }
  //Return true if the label is displayed
  async verifyInvalidCredentialsLabelIsDisplayed() {
    try {
      const credentialsLabel = loginElements.invalidCredentialsLabel();
      await credentialsLabel.waitForDisplayed();
      return await credentialsLabel.isDisplayed();
    } catch (error) {
      return false;
    }
  }
}