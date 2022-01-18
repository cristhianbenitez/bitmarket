import React, { useEffect, useState } from 'react';
import debounce from 'lodash.debounce';

import { SearchResults } from 'components';
import {
  SearchIcon,
  SearchBox,
  StyledInput,
  IconText,
  IconContainer
} from './SearchInput.styles';
import { getSearchResults } from 'store/reducers/search/searchSlice';
import { useDispatch, useSelector } from 'react-redux';

export const SearchInput = () => {
  const [text, setText] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const results = useSelector((state) => state.search.results);
  const dispatch = useDispatch();

  const debouncedApiCall = debounce((query) => {
    dispatch(getSearchResults(query));
  }, 300);

  const handleChange = ({ target: { value } }) => {
    setIsOpen(true);
    setText(value);
  };

  const handleClick = () => setIsOpen(!isOpen);

  const handleClickOutside = ({ target: { id } }) => {
    if (isOpen && id !== 'search-input' && id !== 'search-result') {
      setIsOpen(false);
    }
  };

  const handleSelectItem = () => {
    setIsOpen(false);
    setText('');
  };

  useEffect(() => {
    debouncedApiCall(text);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [text]);

  return (
    <>
      <SearchBox>
        <IconContainer>
          <SearchIcon onClick={handleClick} />
          <IconText>Search</IconText>
        </IconContainer>
        <StyledInput
          id="search-input"
          autoComplete="off"
          onClick={handleClick}
          onChange={handleChange}
          type="text"
          placeholder="Search..."
          value={text}
        />
      </SearchBox>

      {text.length > 0 && isOpen && (
        <SearchResults
          results={results}
          handleSelectItem={() => handleSelectItem}
        />
      )}
    </>
  );
};
