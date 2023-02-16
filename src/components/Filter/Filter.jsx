import { FilerWrap, FieldCaption, ContactInput } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { searchContact } from '../../redux/actions';
import { Heading } from 'components/Heading/Hading';

export const Filter = () => {
  const filter = useSelector(getFilter);  
  const dispatch = useDispatch();

  const handleChange = event => dispatch(searchContact(event.target.value));

  return (
    <>
    <Heading title={'Search contacts'}></Heading>
    <FilerWrap>
      <FieldCaption htmlFor="search">
        Find contact by name
        <ContactInput
          type="text"
          name="search"
          value={filter}
          onChange={handleChange}
        />
      </FieldCaption>
    </FilerWrap>
    </>
  );
};
