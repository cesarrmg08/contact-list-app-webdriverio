export class ContactListElements {
    contactListTitle() {
      return $('//h1[contains(., "Contact List")]');
    }

    addContactButton() {
        return $('//*[@id="add-contact"]');
      }

      parentContactTable() {
        return $('//*[@id="myTable"]');
      }

      contactRows(){
        return $$('//tr[@class="contactTableBodyRow"]');
      }
  }