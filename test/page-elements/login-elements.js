export class LoginElements {
  emailField() {
    return $('//*[@id="email"]');
  }

  passwordField() {
    return $('//*[@id="password"]');
  }

  submitButton() {
    return $('//*[@id="submit"]');
  }

  invalidCredentialsLabel() {
    return $('//span[contains(.,"Incorrect username or password")]');
  }
  
  contactListTitle() {
    return $('//h1[contains(., "Contact List App")]');
  }
}