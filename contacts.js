const fs = require("fs").promises;
const path = require("path");

const contactsPath = path.join(__dirname, "db", "contacts.json");

const listContacts = async () => {
  const data = await fs.readFile(contactsPath, "utf-8");
  return JSON.parse(data);
};

const getContactById = async (contactId) => {
  // ...твой код
};

const removeContactById = async (contactId) => {
  // ...твой код
};

const addContact = async (name, email, phone) => {
  // ...твой код
};

module.exports = {
  listContacts,
  getContactById,
  removeContactById,
  addContact,
};
