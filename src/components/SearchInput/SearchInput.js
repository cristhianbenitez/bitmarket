import React, { Component, useEffect, useState } from 'react';

import axios from 'axios';
import debounce from 'lodash.debounce';

import { SearchResults } from 'components';
import {
  SearchIcon,
  SearchBox,
  StyledInput,
  IconText,
  IconContainer
} from './SearchInput.styles';

export const SearchInput = () => {
  const [text, setText] = useState('');
  const [results, setResults] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const getCoinItemData = async (query, callback) => {
    const parsedQuery = query.replaceAll(' ', '+');
    if (query && query.length > 0) {
      try {
        const { data } = await axios.get(
          `https://crypto-app-server.herokuapp.com/coins/${parsedQuery}`
        );
        callback(data);
      } catch (e) {
        setHasError(false);
      }
    }
    if (hasError) return () => axios.Cancel();
  };

  const debouncedApiCall = debounce((query, callback) => {
    getCoinItemData(query, callback);
  }, 300);

  const handleChange = ({ target: { value } }) => {
    setIsOpen(true);
    setText(value);
  };

  const handleClick = async () => {
    setIsOpen(!isOpen);
  };

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
    debouncedApiCall(text, (data) => setResults(data));
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
