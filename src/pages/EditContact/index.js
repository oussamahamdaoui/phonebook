import { useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { getContact, updateContact } from '../../api';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { isFormValid } from '../../utils';
import './EditContact.scss';



function EditContact() {
  const history = useHistory();
  const { contactId } = useParams();
  const [state, setState] = useState({});

  const handleUpdate = async (evt) => {
    evt.preventDefault();
    const error = await updateContact({
      contactId,
      newPhoneNumber: state.phoneNumber,
      newFirstName: state.firstName,
      newLastName: state.lastName,
    });
    if (error === false) {
      history.push('/');
    }
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
      <h1>Update contact</h1>
      <form className="new-contact-form">
        <Input label="Last name" type="text" value={state.lastName} change={setLastName}></Input>
        <Input label="First name" type="text" value={state.firstName} change={setFirstName}></Input>
        <Input label="Phone number" type="text" value={state.phoneNumber} change={setPhoneNumber}></Input>
        <Button type='primary'
          disabeled={isFormValid(state.firstName, state.lastName, state.phoneNumber)}
          onClick={handleUpdate}>
          Update
        </Button>
        <Link to="/">
          <Button type='cancel'>Cancel</Button>
        </Link>
      </form>
    </section>
  );
}

export default EditContact;