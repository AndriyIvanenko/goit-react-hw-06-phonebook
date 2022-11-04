import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { Li } from './Contacts.styled';
import { ContactsItem } from 'components/ContactsItem/ContactsItem';

const filteredContacts = (contacts, filter) => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.value.toLowerCase())
  );
};

export const Contacts = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const filteredContactList = filteredContacts(contacts, filter);

  return (
    <ul>
      {filteredContactList.map(contact => (
        <Li key={contact.id}>
          <ContactsItem contact={contact}></ContactsItem>
        </Li>
      ))}
    </ul>
  );
};
