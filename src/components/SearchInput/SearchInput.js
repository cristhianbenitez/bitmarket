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
          ...data.map(({ name, image, id }) => ({
            name,
            image,
            id
          }))
        ],
        hasMore: data.length > 0
      }));
    } catch (e) {
      this.setState({ hasError: false });
    }

    if (this.state.hasError) return () => cancel();
  };

  handleChange = ({ target: { value } }) => {
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, 'i');
      suggestions = this.state.searchResult
        .sort()
        .filter((v) => regex.test(v.name));
    }
    this.setState({
      isOpen: true,
      query: value,
      suggestions
    });
  };

  handleClickOutside = ({ target: { id } }) => {
    if (this.state.isOpen && id !== 'input' && id !== 'search-result') {
      this.setState({ isOpen: false });
    }
  };

  handleClick = () => {
    this.getCoinItemData();
    this.setState((prevState) => ({ isOpen: true }));
  };

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleSelectItem() {
    this.setState({ isOpen: false, query: '' });
  }

  render() {
    const { query, isOpen, isLoading } = this.state;

    return (
      <Container>
        <StyledForm>
          <SearchIcon />
          <StyledInput
            id="input"
            autoComplete="off"
            onClick={this.handleClick}
            ref={this.searchBox}
            onChange={this.handleChange}
            type="text"
            placeholder="Search..."
            value={this.state.query}
          />
        </StyledForm>

        {isOpen && query.length > 0 && !isLoading && (
          <SearchResults
            results={this.state.suggestions}
            handleSelectItem={this.handleSelectItem}
          />
        )}
      </Container>
    );
  }
}
