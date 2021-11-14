import React, { useState } from 'react';
import {
  CurrencyIcon,
  DropDownContainer,
  DropDownHeader,
  DropDownList,
  ListItem,
  ListOption
} from './Dropdown.styles';

export const Dropdown = ({ items = [] }) => {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState('USD');
  const toggle = () => setOpen(!open);

  const handleOnClick = (item) => {
    setSelection(item);
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
        <CurrencyIcon /> {selection}
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
