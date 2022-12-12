const fs = require("fs").promises;
const path = require("path");

/*
 * Раскомментируй и запиши значение
 * const contactsPath = ;
 */

// TODO: задокументировать каждую функцию
const listContacts = async () => {
  // ...твой код
};

const getContactById = async (contactId) => {
  // ...твой код
};

const removeContact = async (contactId) => {
  // ...твой код
};

const addContact = async (name, email, phone) => {
  // ...твой код
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
