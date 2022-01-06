import { List, Item, StyledLink } from './SearchResults.styles';

export const SearchResults = ({ results, handleSelectItem }) => {
  return (
    <List>
      {results.map((item) => (
        <Item key={item.id}>
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
