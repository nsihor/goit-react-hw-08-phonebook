import { Label } from './filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { setFilter } from 'redux/contactsSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  return (
    <Label>
      Find contacts by name
      <input
        type="text"
        value={filter}
        onChange={({ currentTarget: { value } }) => dispatch(setFilter(value))}
      />
    </Label>
  );
};
