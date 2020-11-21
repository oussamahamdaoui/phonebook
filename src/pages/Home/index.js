import './Head';
import Head from './Head';
import ContactList from './ContactList';
import { useEffect, useState } from 'react';
import { getContacts } from '../../api';
import { useLocation } from 'react-router-dom';

const getSearchFromURI = (str) => {
  return decodeURIComponent(new URLSearchParams(str).get('q') || '');
}

function Home() {
  const [contactList, setContactList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  const location = useLocation();
  const [search, setSearch] = useState('');

  async function fetchContacts() {
    let contacts = await getContacts();
    setContactList(contacts);
  }

  useEffect(() => {
    fetchContacts();
  }, []);

  useEffect(() => {
    setSearch(getSearchFromURI(location.search));
    if (search !== '') {
      setFilteredList(contactList.filter(({ firstName, lastName, phoneNumber }) => {
        return (firstName.toLowerCase().includes(search.toLowerCase().trim()) ||
          lastName.toLowerCase().includes(search.toLowerCase().trim()) ||
          phoneNumber.toLowerCase().includes(search.toLowerCase().trim()));
      }));
    } else {
      setFilteredList(contactList);
    }
    
  }, [location.search, search, contactList]);


  return (
    <section className="page">
      <Head search={search}></Head>
      <ContactList list={filteredList}></ContactList>
    </section>
  );
}

export default Home;
