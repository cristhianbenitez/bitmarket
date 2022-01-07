import React, { Component } from 'react';
import coinGecko from 'api/coinGecko';
import { SearchResults } from 'components';
import {
  Container,
  SearchIcon,
  StyledForm,
  StyledInput
} from './SearchInput.styles';

export class SearchInput extends Component {
  state = {
    query: '',
    isLoading: true,
    searchResult: [],
    hasError: false,
    isOpen: false,
    suggestions: []
  };

  getCoinItemData = async () => {
    this.setState({ isLoading: true });
    try {
      const { data } = await coinGecko.get('/coins/markets', {
        params: {
          vs_currency: 'usd',
          per_page: '250'
        }
      });
      this.setState((prevState) => ({
        isLoading: false,
        searchResult: [
          ...prevState.searchResult,
          ...data.map(({ name, id }) => ({ name, id }))
        ],
        hasMore: data.length > 0
      }));
    } catch (e) {
      this.setState({ hasError: false });
    }
    if (this.state.hasError) return () => cancel();
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ isOpen: true, query: value });
  };

  handleClick = () => {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  };

  handleClickOutside = ({ target: { id } }) => {
    if (this.state.isOpen && id !== 'search-input' && id !== 'search-result') {
      this.setState({ isOpen: false });
    }
  };

  handleSelectItem() {
    this.setState({ isOpen: false, query: '' });
  }

  componentDidMount() {
    this.getCoinItemData();
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  render() {
    const { query, isOpen, isLoading, searchResult } = this.state;
    const regex = new RegExp(`^${query}`, 'i');
    const suggestions = searchResult.sort().filter((v) => regex.test(v.name));

    return (
      <Container>
        <StyledForm>
          <SearchIcon />
          <StyledInput
            id="search-input"
            autoComplete="off"
            onClick={this.handleClick}
            onChange={this.handleChange}
            type="text"
            placeholder="Search..."
            value={this.state.query}
          />
        </StyledForm>

        {isOpen && query.length > 0 && !isLoading && (
          <SearchResults
            results={suggestions}
            handleSelectItem={() => this.handleSelectItem}
          />
        )}
      </Container>
    );
  }
}
