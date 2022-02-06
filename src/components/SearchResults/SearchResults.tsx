import { v4 as uuid } from 'uuid';
import { Loading } from 'assets';

import {
  Item,
  NoResults,
  StyledLink,
  StyledList
} from './SearchResults.styles';
interface Props {
  handleSelectItem: () => void;
  isOpen: boolean;
  results: [];
  isFetching: boolean;
}
interface ItemProps {
  id: string;
  large: string;
  market_cap_rank: number;
  name: string;
  symbol: string;
  thumb: string;
}

export const SearchResults = ({
  results,
  isFetching,
  handleSelectItem,
  isOpen
}: Props) => {
  if (!isOpen) return null;
  if (isFetching)
    return (
      <StyledList>
        <Loading type="spin" width="20px" />
      </StyledList>
    );
  if (!results.length)
    return (
      <StyledList>
        <NoResults>No results</NoResults>
      </StyledList>
    );
  return (
    <StyledList>
      {results.map((item: ItemProps) => (
        <Item key={uuid()}>
          <StyledLink
            to={`coin/${item.id}`}
            id="search-result"
            onClick={handleSelectItem}
          >
            {item.name}
          </StyledLink>
        </Item>
      ))}
    </StyledList>
  );
};
