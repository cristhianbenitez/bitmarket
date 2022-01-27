import { List, Item, StyledLink } from './SearchResults.styles';

interface Props {
  results: [];
  handleSelectItem: () => void;
}

interface ItemProps {
  id: string;
  large: string;
  market_cap_rank: number;
  name: string;
  symbol: string;
  thumb: string;
}

export const SearchResults = ({ results, handleSelectItem }: Props) => {
  return (
    <List>
      {results.map((item: ItemProps, index) => (
        <Item key={index}>
          <StyledLink
            to={`coin/${item.id}`}
            id="search-result"
            onClick={handleSelectItem}
          >
            {item.name}
          </StyledLink>
        </Item>
      ))}
    </List>
  );
};
