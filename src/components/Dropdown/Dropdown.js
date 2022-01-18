import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
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
import {
  updateCurrency,
  selectCurrency
} from 'store/reducers/currency/currencySlice';

export const Dropdown = () => {
  const currency = useSelector(selectCurrency);
  const { supportedCurrencies } = useSelector((state) => state.generalData);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [selection, setSelection] = useState(currency);

  const handleItemSelection = (item) => {
    setSelection(item);
    setIsOpen(false);
    dispatch(updateCurrency(String(item)));
  };

  const onTextChange = ({ target: { value } }) => {
    setSelection(value);
    if (!isOpen) {
      setIsOpen(true);
    }
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  let suggestions = [...supportedCurrencies];
  if (selection.length) {
    const regex = new RegExp(`^${selection}`, 'i');
    suggestions = [
      ...supportedCurrencies.filter((v) => regex.test(v)),
      ...supportedCurrencies.filter((v) => !regex.test(v)).sort()
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
      {isOpen && supportedCurrencies.length > 0 && (
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
