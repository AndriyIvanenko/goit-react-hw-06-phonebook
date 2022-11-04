import { Form } from 'components/Form/Form';
import { Contacts } from '../Contacts/Contacts';
import { Section, H1, H2 } from './App.styled';
import { Filter } from 'components/Filter/Filter';

export const App = () => {
  return (
    <Section>
      <H1>Phonebook</H1>
      <Form />
      <H2>Contacts</H2>
      <Filter />
      <Contacts />
    </Section>
  );
};
