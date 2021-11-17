import React, { useState } from 'react';
import {
  CurrencyIcon,
  DropDownContainer,
  DropDownHeader,
  DropDownList,
  ListItem
} from './Dropdown.styles';

export const Dropdown = ({ title, items = [] }) => {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState(title);

  const toggle = () => setOpen(!open);

  const handleOnClick = (item) => {
    setSelection(item.value);
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
          {items.map((item) => (
            <ListItem key={item.id} onClick={() => handleOnClick(item)}>
              <span>{item.value}</span>
            </ListItem>
          ))}
        </DropDownList>
      )}
    </DropDownContainer>
  );
};
