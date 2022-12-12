const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const contacts = require("./contacts");

const invokeActions = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const listContacts = await contacts.listContacts();
      console.log(listContacts);
      break;

    case "get":
      const desiredContact = await contacts.getContactById(id);
      console.log(desiredContact);
      break;

    case "remove":
      const contactToRemove = await contacts.removeContactById(id);
      console.log(contactToRemove);
      break;

    case "add":
      const contactToAdd = await contacts.addContact(name, email, phone);
      console.log(contactToAdd);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!")
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

const arr = hideBin(process.argv);
const { argv } = yargs(arr);
invokeActions(argv);
