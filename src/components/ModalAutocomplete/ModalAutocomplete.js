import React, { useState } from 'react';
import {
  Root,
  AutoCompleteContainer,
  AutoCompleteIcon,
  InputContainer,
  Input,
  AutoCompleteItem,
  AutoCompleteItemButton,
  ArrowIcon
} from './ModalAutocomplete.styles';

export const ModalAutocomplete = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const [text, setText] = useState('');

  const onTextChange = ({ target: { value } }) => {
    setIsVisible(true);
    setText(value);
  };

  const suggestionSelected = ({ name, id }) => {
    setIsVisible(false);
    setText(name);
    props.handleChange(id);
  };

  const toggle = () => setIsVisible(!isVisible);

  let suggestions = [...props.data];
  if (text.length) {
    const regex = new RegExp(`^${text}`, 'i');
    suggestions = props.data.sort().filter((v) => regex.test(v.name));
  }
  return (
    <Root>
      <InputContainer onClick={toggle}>
        <Input
          autoComplete="off"
          name="coinName"
          onChange={onTextChange}
          value={text}
          type="text"
          placeholder="Select Coin"
        />
        <AutoCompleteIcon isOpen={isVisible} onClick={toggle}>
          <ArrowIcon />
        </AutoCompleteIcon>
      </InputContainer>
      {suggestions.length > 0 && isVisible && (
        <AutoCompleteContainer>
          {suggestions?.map((item) => {
            return (
              <AutoCompleteItem key={item.id}>
                <AutoCompleteItemButton
                  key={item.code}
                  onClick={() => suggestionSelected(item)}
                >
                  {item.name}
                </AutoCompleteItemButton>
              </AutoCompleteItem>
            );
          })}
        </AutoCompleteContainer>
      )}
    </Root>
  );
};
