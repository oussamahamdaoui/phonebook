import Button from '../../components/Button';
import Input from '../../components/Input';
import './NewContact.scss';
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import { createContact } from '../../api';
import { isFormValid } from '../../utils';

function NewContact() {
  const history = useHistory();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  async function handleCreate(evt) {
    evt.preventDefault();
    await createContact({
      firstName,
      lastName,
      phoneNumber,
    });
    history.push('/');
  }

  return (
    <section className="new-contact">
      <h1>Create a new contact</h1>
      <form className="new-contact-form">
        <Input label="Last name" type="text" value={lastName} change={setLastName}></Input>
        <Input label="First name" type="text" value={firstName} change={setFirstName}></Input>
        <Input label="Phone number" type="text" value={phoneNumber} change={setPhoneNumber}></Input>
        <Button type='primary' disabeled={isFormValid(firstName, lastName, phoneNumber)} onClick={handleCreate}>Create</Button>
        <Link to="/">
          <Button type='cancel'>Cancel</Button>
        </Link>
      </form>
    </section>
  );
}

export default NewContact;
