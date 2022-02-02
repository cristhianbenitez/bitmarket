import React from 'react';
import debounce from 'lodash.debounce';
import { getSearchResults } from 'store/reducers/search/searchSlice';
import { useAppDispatch, useAppSelector } from 'store/hooks';

import { SearchResults } from 'components';
import {
  SearchIcon,
  SearchBox,
  StyledInput,
  IconText,
  IconContainer,
  SearchContainer
} from './SearchInput.styles';

export const SearchInput = () => {
  const [text, setText] = React.useState('');
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const results = useAppSelector((state) => state.search.results);
  const dispatch = useAppDispatch();

  const debouncedApiCall = debounce((query: string) => {
    dispatch(getSearchResults(query));
  }, 300);

  const handleChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setIsOpen(true);
    setText(e.target.value);
  };

  const handleClick = () => setIsOpen(!isOpen);

  const handleClickOutside = (e: MouseEvent) => {
    const id = (e.target as Element).id;
    if (isOpen && id !== 'search-input' && id !== 'search-result') {
      setIsOpen(false);
    }
  };

  const handleSelectItem = () => {
    setIsOpen(false);
    setText('');
  };

  React.useEffect(() => {
    debouncedApiCall(text);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [text]);

  return (
    <SearchContainer>
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
    </SearchContainer>
  );
};
