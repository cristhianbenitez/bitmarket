import React from 'react';
import { useGetSearchResultsQuery } from 'store/services/search';
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
import { v4 as uuid } from 'uuid';
export interface ItemInterface {
  id: string;
  large: string;
  market_cap_rank: number | null;
  name: string;
  symbol: string;
  thumb: string;
}
interface Props {
  handleItemSelected: (item: ItemInterface) => void;
}

export const ModalAutocomplete = ({ handleItemSelected }: Props) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [text, setText] = React.useState('');
  const { data } = useGetSearchResultsQuery(text, {
    skip: text.length < 1
  });
  const results = data?.coins ?? [];

  const onTextChange = ({
    target: { value }
  }: React.ChangeEvent<HTMLInputElement>) => {
    setIsVisible(true);
    setText(value);
  };

  const suggestionSelected = (item: ItemInterface) => {
    setIsVisible(false);
    setText(item.name);
    handleItemSelected(item);
  };

  const toggle = () => setIsVisible(!isVisible);

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
      {results.length > 0 && isVisible && (
        <AutoCompleteContainer>
          {results?.map((item: ItemInterface) => (
            <AutoCompleteItem key={uuid()}>
              <AutoCompleteItemButton onClick={() => suggestionSelected(item)}>
                {item.name}
              </AutoCompleteItemButton>
            </AutoCompleteItem>
          ))}
        </AutoCompleteContainer>
      )}
    </Root>
  );
};
