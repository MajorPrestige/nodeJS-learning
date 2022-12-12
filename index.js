const contacts = require("./contacts");
console.log(__dirname);


const invokeActions = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "listContacts":
      const listContacts = await contacts.listContacts();
      console.log(listContacts);
      break;
    default:
      console.log("Unknown action");
  }
};

invokeActions({ action: "listContacts" });
