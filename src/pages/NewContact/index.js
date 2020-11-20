import Button from '../../components/Button';
import Input from '../../components/Input';
import './NewContact.scss';
import { Link } from 'react-router-dom';

function NewContact() {
  return (
    <section className="new-contact">
      <h1>Create a new contact</h1>
      <form className="new-contact-form">
        <Input label="Last name" type="text"></Input>
        <Input label="First name" type="text"></Input>
        <Input label="Phone number" type="text"></Input>
        <Button type='primary' >Create</Button>
        <Link to="/">
          <Button type='cancel'>Cancel</Button>
        </Link>
      </form>
    </section>
  );
}

export default NewContact;
