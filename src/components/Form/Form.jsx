import { StyledForm, Label, Input, Button } from './Form.styled';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlise';
// import { useSelector } from 'react-redux';
// import { getContacts } from 'redux/selectors';

export const Form = () => {
  const dispatch = useDispatch();
  // const contacts = useSelector(getContacts);

  const formSubmitHandler = evt => {
    evt.preventDefault();
    const form = evt.target;
    // const name = form.elements.name.value;
    // if (contacts.find(contact => contact.name === name)) {
    //   alert(`${name} is already in contacts`);
    //   return;
    // }
    dispatch(addContact(form.elements.name.value, form.elements.number.value));
    form.reset();
  };

  return (
    <StyledForm onSubmit={formSubmitHandler}>
      <Label htmlFor="name">Name</Label>
      <Input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />

      <Label htmlFor="number">Number</Label>
      <Input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <Button type="submit">Add contact</Button>
    </StyledForm>
  );
};
