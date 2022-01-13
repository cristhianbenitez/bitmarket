import React, { useEffect, useState } from 'react';
import coinGecko from 'api/coinGecko';

import {
  DollarIcon,
  DropDownContainer,
  DropDownHeader,
  DropDownList,
  ListItem,
  SelectionContainer,
  ArrowsContainer,
  Input
} from './Dropdown.styles';
import { DropdownArrow } from 'assets';

export const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selection, setSelection] = useState('');
  const [options, setOptions] = useState([]);

  const getSupportedCurrencies = async () => {
    setLoading(true);
    try {
      const { data } = await coinGecko.get('/simple/supported_vs_currencies');
      setOptions(data);
      setLoading(false);
    } catch (error) {
      setLoading(true);
    }
  };

  const handleItemSelection = (item) => {
    setSelection(item);
    setIsOpen(false);
  };

  const onTextChange = ({ target: { value } }) => {
    setSelection(value);
    if (!isOpen) {
      setIsOpen(true);
    }
  };

  const handleClick = async () => {
    if (!isOpen && !options.length) {
      await getSupportedCurrencies();
    }
    setIsOpen(!isOpen);
  };

  let suggestions = options;
  if (selection.length) {
    const regex = new RegExp(`^${selection}`, 'i');
    suggestions = [
      ...options.filter((v) => regex.test(v)),
      ...options.filter((v) => !regex.test(v)).sort()
    ];
  }
  return (
    <DropDownContainer>
      <DropDownHeader
        tabIndex={0}
        role="button"
        onKeyPress={handleClick}
        onClick={handleClick}
      >
        <DollarIcon />
        <SelectionContainer>
          <Input
            autoComplete="off"
            value={selection}
            onChange={onTextChange}
            type="text"
          />
          <ArrowsContainer onClick={handleClick}>
            <DropdownArrow isOpen={isOpen} />
          </ArrowsContainer>
        </SelectionContainer>
      </DropDownHeader>
      {isOpen && options.length > 0 && (
        <DropDownList>
          {suggestions.map((item, index) => (
            <ListItem key={index} onClick={() => handleItemSelection(item)}>
              <span>{item}</span>
            </ListItem>
          ))}
        </DropDownList>
      )}
    </DropDownContainer>
  );
};
