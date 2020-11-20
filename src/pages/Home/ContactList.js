import ContactElement from './ContactElement';
import './ContactList.scss';

function ContactList({
  list = [],
}) {
  return (
    <div className="contact-list">
      {list.map(({
        firstName,
        lastName,
        contactId,
        phoneNumber
      }) =>
        <ContactElement firstName={firstName} lastName={lastName} key={contactId} phoneNumber={phoneNumber}>
        </ContactElement>
      )}
    </div>
  );
}

export default ContactList;
