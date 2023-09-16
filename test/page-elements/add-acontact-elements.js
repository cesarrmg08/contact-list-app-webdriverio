export class AddContactElements {
  addContactTitle() {
    return $('//h1[contains(., "Add Contact")]');
  }

  firstNameField() {
    return $('//*[@id="firstName"]');
  }

  lastNameField() {
    return $('//*[@id="lastName"]');
  }

  birthDateField() {
    return $('//*[@id="birthdate"]');
  }

  emailField() {
    return $('//*[@id="email"]');
  }

  phoneField() {
    return $('//*[@id="phone"]');
  }

  street1Field() {
    return $('//*[@id="street1"]');
  }

  cityField() {
    return $('//*[@id="city"]');
  }

  stateField() {
    return $('//*[@id="stateProvince"]');
  }

  postalCodeField() {
    return $('//*[@id="postalCode"]');
  }

  countryField() {
    return $('//*[@id="country"]');
  }

  submitButton() {
    return $('//*[@id="submit"]');
  }

  errorMessageLabel() {
    return $('//*[@id="error"]');
  }
}
