import React from 'react';
import { useAppDispatch, useAppSelector } from 'store/hooks';

import { DropdownArrow } from 'assets';
import {
  updateCurrency,
  selectCurrency
} from 'store/reducers/currency/currencySlice';
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

export const Dropdown = () => {
  const currency = useAppSelector(selectCurrency);
  const { supportedCurrencies } = useAppSelector((state) => state.generalData);
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = React.useState(false);
  const [selection, setSelection] = React.useState(currency);

  const handleItemSelection = (item: string) => {
    setSelection(item);
    setIsOpen(false);
    dispatch(updateCurrency(String(item)));
  };

  const onTextChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setSelection(e.target.value);
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
