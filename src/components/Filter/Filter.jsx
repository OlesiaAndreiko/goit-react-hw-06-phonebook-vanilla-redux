import PropTypes from 'prop-types';
import {FilerWrap, FieldCaption, ContactInput} from "./Filter.styled"
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';

export const Filter = ({ onChange }) => {

  const filter = useSelector(getFilter) ;

  return (
    <FilerWrap>
      <FieldCaption htmlFor="search">
        Find contact by name
        <ContactInput 
        type="text" 
        name="search" 
        value={filter} 
        onChange={onChange} />
      </FieldCaption>
    </FilerWrap>
  );
};

Filter.propTypes = {
  // search: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
