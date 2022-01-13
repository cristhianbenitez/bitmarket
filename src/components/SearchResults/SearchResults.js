import { List, Item, StyledLink } from './SearchResults.styles';

export const SearchResults = ({ results, handleSelectItem }) => {
  return (
    <List>
      {results.map((item, index) => (
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
