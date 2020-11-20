import './Head';
import Head from './Head';
import ContactList from './ContactList';

function Home() {
  const list = [
    {
      firstName: 'Oussama',
      lastName: 'Hamdaoui',
      phoneNumber: '+33 06 23392740',
      contactId: '1',
    }
  ];
  return (
    <section className="page">
      <Head></Head>
      <ContactList list={list}></ContactList>
    </section>
  );
}

export default Home;
