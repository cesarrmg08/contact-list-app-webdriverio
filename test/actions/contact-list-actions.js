import { ContactListElements } from "../page-elements/contact-list-elements";
const contactElements = new ContactListElements();

export class ContactListActions {
  //Return true if the contact title is displayed
  async verifyContactListTileIsDisplayed() {
    try {
      const contactTitle = contactElements.contactListTitle();
      await contactTitle.waitForDisplayed();
      return await contactTitle.isDisplayed();
    } catch (error) {
      return false;
    }
  }

  async clickAddContactButton() {
    await contactElements.addContactButton().waitForClickable();
    await contactElements.addContactButton().click();
  }

  async getNumberOfContactRows() {
    await contactElements.parentContactTable().waitForDisplayed();
    const contactRows = await contactElements.contactRows().length;
    return contactRows;
  }
}