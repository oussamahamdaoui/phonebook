import { get, post } from './utils';

const getContacts = async () => {
  const res = await get('contacts');
  return res.contacts;
};

const createContact = async ({
  firstName,
  lastName,
  phoneNumber,
}) => {
  const res = await post('new-contact', {
    firstName,
    lastName,
    phoneNumber,
  });
  return res.contactId;
};

const getContact = async (contactId) => {
  const res = await get(`contact/${contactId}`);
  return res.contact;
}

const updateContact = async ({
  contactId,
  newPhoneNumber,
  newFirstName,
  newLastName,
}) => {
  const res = await post('update-contact', {
    contactId,
    newPhoneNumber,
    newFirstName,
    newLastName,
  });

  return res.error;
}

export {
  getContacts,
  createContact,
  getContact,
  updateContact,
}