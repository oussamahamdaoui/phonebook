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

export {
  getContacts,
  createContact,
}