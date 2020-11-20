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
        _id,
        phoneNumber
      }) =>
        <ContactElement firstName={firstName} lastName={lastName} key={_id} phoneNumber={phoneNumber}>
        </ContactElement>
      )}
    </div>
  );
}

export default ContactList;
