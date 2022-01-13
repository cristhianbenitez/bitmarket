import React, { useState } from 'react';

import {
  DropDownHeader,
  DropDownList,
  IntervalDropdownWrapper,
  ListItem,
  SelectButton,
  SelectionContainer
} from './IntervalDropdown.styles';
import { DropdownArrow } from 'assets';

export const IntervalDropdown = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selection, setSelection] = useState('');
  const [text, setText] = useState('7 Days');

  const toggle = () => setIsOpen(!isOpen);

  const handleOnClick = ({ currentTarget: { textContent } }) => {
    setText(textContent);
    setSelection(textContent);
    toggle();
  };

  const handleSubmitDays = () => {};

  return (
    <IntervalDropdownWrapper>
      <DropDownHeader onKeyPress={toggle} onClick={toggle}>
        <SelectionContainer>{text}</SelectionContainer>
        <DropdownArrow isOpen={isOpen} />
      </DropDownHeader>
      <SelectButton onClick={handleSubmitDays}>SELECT</SelectButton>
      {isOpen && (
        <DropDownList>
          {['24 Hours', '7 Days', '30 Days', '1 Year'].map((time, index) => (
            <ListItem key={index} onClick={handleOnClick}>
              {time}
            </ListItem>
          ))}
        </DropDownList>
      )}
    </IntervalDropdownWrapper>
  );
};
