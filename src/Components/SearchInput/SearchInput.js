import React from 'react';
import { SearchIcon, StyledForm, StyledInput } from './SearchInput.styles';

export const SearchInput = () => {
  const handleSubmit = () => {
    // handle form submit
  };
  return (
    <StyledForm>
      <SearchIcon onClick={handleSubmit} />
      <StyledInput type="text" placeholder="Search..." />
    </StyledForm>
  );
};
