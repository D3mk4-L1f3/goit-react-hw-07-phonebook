import { useDispatch } from 'react-redux';
import { filter } from 'redux/contactsSlice';

import {
  MainContainerStyle,
  ThirdTitleStyle,
} from '../styled-component/app.styled';
import { InputStyle } from '../styled-component/form.styled';

export default function Filter() {
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    const filterText = e.target.value;
    dispatch(filter(filterText));
  };

  return (
    <MainContainerStyle>
      <ThirdTitleStyle>Find your`s contact :)</ThirdTitleStyle>
      <InputStyle
        onChange={handleFilterChange}
        name="searcher"
        type="text"
        placeholder="... searching ..."
        title="Fast find your`s contact :)"
      />
    </MainContainerStyle>
  );
}
