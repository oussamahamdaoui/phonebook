import { Edit2 } from 'react-feather';
import Button from '../../components/Button';
import './ContactElement.scss';
import { getRandomColor } from '../../utils';
import { Link } from 'react-router-dom';


const getImgPlaceHolder = (firstName, lastName) => `${lastName.substring(0, 1).toUpperCase()}${firstName.substring(0, 1).toUpperCase()}`;

function ContactElement({
  firstName,
  lastName,
  phoneNumber,
  contactId,
}) {
  return (
    <div className="contact-element">
      <div style={{
        backgroundColor: getRandomColor(),
      }} className="img-placeholder">{getImgPlaceHolder(firstName, lastName)}</div>
      <div className="phone-and-name">
        <div>{firstName}  { lastName}</div>
        <div>{phoneNumber}</div>
      </div>
      <Link to={ '/edit-contact/' + contactId}>
        <Button>
          <Edit2></Edit2>
        </Button>
      </Link>
    </div>
  );
}

export default ContactElement;
