import React, { useState, useEffect } from 'react';
import {
  CurrencyIcon,
  DropDownContainer,
  DropDownHeader,
  DropDownList,
  ListItem,
  SelectionContainer,
  ArrowUpIcon,
  ArrowDownIcon,
  ArrowsContainer
} from './Dropdown.styles';

export const Dropdown = ({ items = [] }) => {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState('USD');
  const toggle = () => setOpen(!open);

  useEffect(() => {
    const CurrentSelection = localStorage.getItem('selection');
    setSelection(CurrentSelection);
  }, []);

  const handleOnClick = (item) => {
    setSelection(item);
    localStorage.setItem('selection', item);
    toggle(!open);
  };
  return (
    <DropDownContainer>
      <DropDownHeader
        tabIndex={0}
        role="button"
        onKeyPress={() => {
          toggle(!open);
        }}
        onClick={() => {
          toggle(!open);
        }}
      >
        <CurrencyIcon />{' '}
        <SelectionContainer>
          {selection}
          <ArrowsContainer>
            {open ? <ArrowUpIcon /> : <ArrowDownIcon />}
          </ArrowsContainer>
        </SelectionContainer>
      </DropDownHeader>
      {open && (
        <DropDownList>
          {items.map((item, index) => (
            <ListItem key={index} onClick={() => handleOnClick(item)}>
              <span>{item}</span>
            </ListItem>
          ))}
        </DropDownList>
      )}
    </DropDownContainer>
  );
};
