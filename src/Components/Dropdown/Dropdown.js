import React from 'react';

import {
  CurrencyIcon,
  DropDownContainer,
  DropDownHeader,
  DropDownList,
  ListItem,
  SelectionContainer,
  ArrowUpIcon,
  ArrowDownIcon,
  ArrowsContainer
} from './Dropdown.styles';

export class Dropdown extends React.Component {
  state = {
    isOpen: false,
    selection: 'USD'
  };
  toggle = () =>
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen
    }));

  componentDidMount = () => {
    const CurrentSelection = localStorage.getItem('selection') || 'USD';
    this.setState({ selection: CurrentSelection });
    this.props.changeCurrency(CurrentSelection);
  };

  handleOnClick = (item) => {
    this.setState({ selection: item });
    this.props.changeCurrency(item);
    localStorage.setItem('selection', item);
    this.toggle();
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
            {this.state.selection}
            <ArrowsContainer>
              {this.state.isOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}
            </ArrowsContainer>
          </SelectionContainer>
        </DropDownHeader>
        {this.state.isOpen && (
          <DropDownList>
            {this.props.items.map((item, index) => (
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
Dropdown.defaultProps = {
  items: []
};
