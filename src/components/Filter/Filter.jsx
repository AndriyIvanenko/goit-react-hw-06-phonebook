import { FilterSection, Label, Input } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { setFilterValue } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterChangeHandler = evt => {
    const filterValue = evt.currentTarget.value;
    dispatch(setFilterValue(filterValue));
  };

  return (
    <FilterSection>
      <Label htmlFor="filter">Find contacts by name</Label>
      <Input type="text" name="filter" onChange={filterChangeHandler} />
    </FilterSection>
  );
};
