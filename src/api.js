import { get } from './utils';

const getContacts = async () => {
  const res = await get('contacts');
  return res.contacts;
};

export {
  getContacts,
}