import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getContact } from '../../api';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { isFormValid } from '../../utils';



function EditContact() {
  const { contactId } = useParams();
  const [state, setState] = useState({});

  const handleUpdate = (evt) => { 
    evt.preventDefault();
  };

  const setLastName = (lastName) => {
    setState({
      ...state,
      lastName,
    });
  };

  const setFirstName = (firstName) => {
    setState({
      ...state,
      firstName,
    });
  }

  const setPhoneNumber = (phoneNumber) => {
    setState({
      ...state,
      phoneNumber,
    });
  }

  useEffect(() => {
    async function handleGeteContact() {
      const contact = await getContact(contactId);
      setState(contact);
    };
    handleGeteContact();
  }, [contactId]);

  return (
    <section className="new-contact">
      <h1>Create a new contact</h1>
      <form className="new-contact-form">
        <Input label="Last name" type="text" value={state.lastName} change={setLastName}></Input>
        <Input label="First name" type="text" value={state.firstName} change={setFirstName}></Input>
        <Input label="Phone number" type="text" value={state.phoneNumber} change={setPhoneNumber}></Input>
        <Button type='primary'
          disabeled={isFormValid(state.firstName, state.lastName, state.phoneNumber)}
          onClick={handleUpdate}>
          Create
        </Button>
        <Link to="/">
          <Button type='cancel'>Cancel</Button>
        </Link>
      </form>
    </section>
  );
}

export default EditContact;