const fs = require("fs").promises;
const path = require("path");

const contactsPath = path.join(__dirname, "db", "contacts.json");

const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
};

const getContactById = async (contactId) => {
  const contacts = await listContacts();
  const desiredContact = contacts.find((el) => el.id === contactId);

  return desiredContact || null;
};

const removeContactById = async (contactId) => {
  const contacts = await listContacts();
  const indexToRemove = contacts.findIndex((el) => el.id === contactId);

  if (indexToRemove === -1) {
    return null;
  }

  const [contactToRemove] = contacts.splice(indexToRemove, 1);

  return contactToRemove;
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
