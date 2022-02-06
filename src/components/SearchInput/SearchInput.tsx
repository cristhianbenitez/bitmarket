import React from 'react';
import useOnClickOutside from 'use-onclickoutside';
import { SearchResults } from 'components';
import {
  SearchIcon,
  SearchBox,
  StyledInput,
  IconText,
  IconContainer,
  SearchContainer
} from './SearchInput.styles';
import { useGetSearchResultsQuery } from 'store/services/search';

export const SearchInput = () => {
  const [text, setText] = React.useState('');
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const { data, isFetching } = useGetSearchResultsQuery(text, {
    skip: text.length < 1
  });
  const results = data?.coins ?? [];

  const ref = React.useRef(null);

  useOnClickOutside(ref, () => {
    setIsOpen(false);
  });

  const handleChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setIsOpen(true);
    setText(e.target.value);
  };

  const handleClick = () => setIsOpen(!isOpen);

  const handleSelectItem = () => {
    setIsOpen(false);
    setText('');
  };

  return (
    <SearchContainer ref={ref}>
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
      {text.length > 0 && (
        <SearchResults
          results={results}
          isFetching={isFetching}
          handleSelectItem={handleSelectItem}
          isOpen={isOpen}
        />
      )}
    </SearchContainer>
  );
};
