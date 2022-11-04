import PropTypes from 'prop-types';
import { Contact, Button, Name } from './ContactsItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlise';

export const ContactsItem = ({ contact }) => {
  const dispatch = useDispatch();
  const onDeleteClick = () => dispatch(deleteContact(contact.id));

  return (
    <Contact>
      <Name>{contact.name}:</Name>
      <span>{contact.number}</span>
      <Button type="button" onClick={onDeleteClick}>
        delete
      </Button>
    </Contact>
  );
};

ContactsItem.propTypes = {
  contact: PropTypes.object.isRequired,
};
