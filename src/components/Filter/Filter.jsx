import { FilterSection, Label, Input } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/actions';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterChangeHandler = evt => {
    const value = evt.currentTarget.value;
    dispatch(filterContacts(value));
  };

  return (
    <FilterSection>
      <Label htmlFor="filter">Find contacts by name</Label>
      <Input type="text" name="filter" onChange={filterChangeHandler} />
    </FilterSection>
  );
};
