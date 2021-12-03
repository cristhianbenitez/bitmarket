import React from 'react';
import {
  ArrowDownIcon,
  ArrowsContainer,
  ArrowUpIcon,
  DropDownContainer,
  DropDownHeader,
  DropDownList,
  IntervalDropdownWrapper,
  ListItem,
  SelectButton,
  SelectionContainer
} from './IntervalDropdown.styles';

export class IntervalDropdown extends React.Component {
  state = {
    isOpen: false,
    selection: '7 Days'
  };

  toggle = () =>
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen
    }));

  handleOnClick = (e) => {
    this.setState({ selection: e.target.outerText });
    this.toggle;
  };

  handleSubmitDays = () => {
    console.log('getting data and rerendering page');
  };
  render() {
    return (
      <IntervalDropdownWrapper>
        <DropDownContainer
          tabIndex={0}
          role="button"
          onKeyPress={() => {
            this.toggle();
          }}
          onClick={() => {
            this.toggle();
          }}
        >
          <DropDownHeader>
            <SelectionContainer>{this.state.selection}</SelectionContainer>
          </DropDownHeader>
          <ArrowsContainer>
            {this.state.isOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}
          </ArrowsContainer>
          {this.state.isOpen && (
            <DropDownList>
              <ListItem onClick={this.handleOnClick}>24 Hours</ListItem>
              <ListItem onClick={this.handleOnClick}>7 Days</ListItem>
              <ListItem onClick={this.handleOnClick}>30 Days</ListItem>
              <ListItem onClick={this.handleOnClick}>1 Year</ListItem>
            </DropDownList>
          )}
        </DropDownContainer>

        <SelectButton onClick={this.handleSubmitDays}>SELECT</SelectButton>
      </IntervalDropdownWrapper>
    );
  }
}
