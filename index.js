const contacts = require("./contacts");
console.log(__dirname);

const invokeActions = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "listContacts":
      const listContacts = await contacts.listContacts();
      console.log(listContacts);
      break;

    case "getContactById":
      const desiredContact = await contacts.getContactById(id);
      console.log(desiredContact);
      break;

    case "removeContactById":
      const contactToRemove = await contacts.removeContactById(id);
      console.log(contactToRemove);
      break;

    case "addContact":
      const contactToAdd = await contacts.addContact(name, email, phone);
      console.log(contactToAdd);
      break;

    default:
      console.log("Unknown action");
  }
};

// invokeActions({ action: "listContacts" });
// invokeActions({ action: "getContactById", id: "1" });
// invokeActions({ action: "removeContactById", id: "1" });
// invokeActions({
//   action: "addContact",
//   name: "Dan",
//   email: "mail.com",
//   phone: "777",
// });
