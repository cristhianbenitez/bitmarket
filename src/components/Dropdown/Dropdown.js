import React from 'react';
import coinGecko from 'api/coinGecko';

import {
  CurrencyIcon,
  DropDownContainer,
  DropDownHeader,
  DropDownList,
  ListItem,
  SelectionContainer,
  ArrowUpIcon,
  ArrowDownIcon,
  ArrowsContainer,
  Input
} from './Dropdown.styles';

export class Dropdown extends React.Component {
  state = {
    isOpen: false,
    isLoading: false,
    selection: '',
    options: [],
    suggestions: []
  };

  toggle = () =>
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen
    }));

  getSupportedCurrencies = async () => {
    this.setState({ isLoading: true });
    const { data } = await coinGecko.get('/simple/supported_vs_currencies');
    this.setState({ isLoading: false, options: data });
  };

  handleOnClick = (item) => {
    this.setState({ selection: item });
    this.props.changeCurrency(item);
    localStorage.setItem('selection', item);
    this.toggle();
  };

  onTextChange = ({ target: { value } }) => {
    const updatedState = {
      isOpen: true,
      selection: value
    };
    if (value.length) {
      const regex = new RegExp(`^${value}`, 'i');
      const filteredSuggestions = this.state.options
        .filter((v) => regex.test(v))
        .sort();
      this.setState({ ...updatedState, suggestions: filteredSuggestions });
    } else {
      this.setState({ ...updatedState });
    }
  };

  componentDidMount = () => {
    this.getSupportedCurrencies();
    const currentSelection = localStorage.getItem('selection') || 'usd';
    this.setState({ selection: currentSelection });
    this.props.changeCurrency(currentSelection);
  };

  render() {
    return (
      <DropDownContainer>
        <DropDownHeader
          tabIndex={0}
          role="button"
          onKeyPress={this.toggle}
          onClick={this.toggle}
        >
          <CurrencyIcon />
          <SelectionContainer>
            <Input
              autoComplete="off"
              value={this.state.selection}
              onChange={this.onTextChange}
              type="text"
            />
            <ArrowsContainer>
              {this.state.isOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}
            </ArrowsContainer>
          </SelectionContainer>
        </DropDownHeader>
        {this.state.isOpen && this.state.suggestions.length > 0 && (
          <DropDownList>
            {this.state.suggestions.map((item, index) => (
              <ListItem key={index} onClick={() => this.handleOnClick(item)}>
                <span>{item}</span>
              </ListItem>
            ))}
          </DropDownList>
        )}
      </DropDownContainer>
    );
  }
}
