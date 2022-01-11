import { DropdownArrow } from 'assets';
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
  SelectionContainer,
  SelectContainer
} from './IntervalDropdown.styles';

export class IntervalDropdown extends React.Component {
  state = {
    isOpen: false,
    selection: '',
    text: '7 Days'
  };

  toggle = () =>
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen
    }));

  handleOnClick = (e) => {
    this.setState({
      text: e.currentTarget.textContent
    });
    this.toggle();
  };

  handleSubmitDays = () => {};
  render() {
    return (
      <IntervalDropdownWrapper>
        <DropDownHeader onKeyPress={this.toggle} onClick={this.toggle}>
          <SelectionContainer>{this.state.text}</SelectionContainer>
          <DropdownArrow isOpen={this.state.isOpen} />
        </DropDownHeader>
        <SelectButton onClick={this.handleSubmitDays}>SELECT</SelectButton>
        {this.state.isOpen && (
          <DropDownList>
            {['24 Hours', '7 Days', '30 Days', '1 Year'].map((time, index) => (
              <ListItem key={index} onClick={this.handleOnClick}>
                {time}
              </ListItem>
            ))}
          </DropDownList>
        )}
      </IntervalDropdownWrapper>
    );
  }
}
