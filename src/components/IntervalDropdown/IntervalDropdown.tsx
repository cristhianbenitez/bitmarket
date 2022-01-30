import React from 'react';

import {
  DropDownHeader,
  DropDownList,
  IntervalDropdownWrapper,
  ListItem,
  SelectButton,
  SelectionContainer
} from './IntervalDropdown.styles';
import { DropdownArrow } from 'assets';

export const IntervalDropdown = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selection, setSelection] = React.useState<string | null>(null);
  const [text, setText] = React.useState<string | null>('7 Days');

  const toggle = () => setIsOpen(!isOpen);

  const handleOnClick = ({
    currentTarget: { textContent }
  }: React.MouseEvent<HTMLLIElement>) => {
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
