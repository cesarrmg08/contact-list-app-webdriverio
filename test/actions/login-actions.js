import { LoginElements } from "../page-elements/login-elements";
const loginElements = new LoginElements();

export class LoginActions {

    // Type the email on the field
    async fillEmailField() {
        await loginElements.emailField().waitForExist();
        await loginElements.emailField().waitForClickable();
        await loginElements.emailField().addValue('cesarmanzuetagoris@hotmail.com');
      }
      
    // Type the password on the field
      async fillPasswordField() {
        await loginElements.passwordField().waitForExist();
        await loginElements.passwordField().waitForClickable();
        await loginElements.passwordField().addValue('Testing123');
      }
}