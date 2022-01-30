import React from 'react';
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

interface Props {
  data: [];
  handleChange: (p: string) => void;
}

export const ModalAutocomplete = ({ data, handleChange }: Props) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [text, setText] = React.useState('');

  const onTextChange = ({
    target: { value }
  }: React.ChangeEvent<HTMLInputElement>) => {
    setIsVisible(true);
    setText(value);
  };

  const suggestionSelected = ({ name, id }: { name: string; id: string }) => {
    setIsVisible(false);
    setText(name);
    handleChange(id);
  };

  const toggle = () => setIsVisible(!isVisible);

  let suggestions: any = [...data];
  if (text.length) {
    const regex = new RegExp(`^${text}`, 'i');
    suggestions = data
      .sort()
      .filter((v: { name: string }) => regex.test(v.name));
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
          {suggestions?.map((item: any) => {
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
