import './Head';
import Head from './Head';
import ContactList from './ContactList';
import { useEffect, useState } from 'react';
import { getContacts } from '../../api';

function Home() {
  const [contactList, setContactList] = useState([]);

  async function fetchContacts() {
    const contacts = await getContacts();
    setContactList(contacts);
  }

  useEffect(() => {
    fetchContacts()
  }, []);

  return (
    <section className="page">
      <Head></Head>
      <ContactList list={contactList}></ContactList>
    </section>
  );
}

export default Home;
