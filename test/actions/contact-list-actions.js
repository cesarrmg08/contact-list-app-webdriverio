import { ContactListElements } from "../page-elements/contact-list-elements";
const contactElements = new ContactListElements();

export class ContactListActions {
  //Return true if the label is displayed
  async verifyContactListTileIsDisplayed() {
    try {
      const contactTitle = contactElements.contactListTitle();
      await contactTitle.waitForDisplayed();
      return await contactTitle.isDisplayed();
    } catch (error) {
      return false;
    }
  }
}