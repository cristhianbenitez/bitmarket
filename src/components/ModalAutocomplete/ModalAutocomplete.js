import React, { Component } from 'react';
import {
  Root,
  AutoCompleteContainer,
  AutoCompleteIcon,
  InputContainer,
  Input,
  AutoCompleteItem,
  AutoCompleteItemButton,
  Label,
  ArrowIcon
} from './ModalAutocomplete.styles';

export class ModalAutocomplete extends Component {
  state = {
    isDropdownVisible: false,
    text: ''
  };

  onTextChange = ({ target: { value } }) => {
    this.setState({ isDropdownVisible: true, text: value });
  };

  suggestionSelected = (value) => {
    this.setState({
      isDropdownVisible: false,
      text: value.name
    });
    this.props.handleChange(value.id);
  };

  toggle = () => {
    this.setState((prevState) => ({
      isDropdownVisible: !prevState.isDropdownVisible
    }));
  };

  render() {
    let suggestions = [...this.props.data];
    if (this.state.text?.length) {
      const regex = new RegExp(`^${this.state.text}`, 'i');
      suggestions = this.props.data.sort().filter((v) => regex.test(v.name));
    }
    return (
      <Root>
        <InputContainer onClick={this.toggle}>
          <Input
            autoComplete="off"
            defaultValue={this.state.text}
            onChange={this.onTextChange}
            type={'text'}
            placeholder="Select Coin"
          />
          <AutoCompleteIcon
            isOpen={this.state.isDropdownVisible}
            onClick={this.toggle}
          >
            <ArrowIcon />
          </AutoCompleteIcon>
        </InputContainer>
        {suggestions.length > 0 && this.state.isDropdownVisible && (
          <AutoCompleteContainer>
            {suggestions?.map((item) => {
              return (
                <AutoCompleteItem key={item.id}>
                  <AutoCompleteItemButton
                    key={item.code}
                    onClick={() => this.suggestionSelected(item)}
                  >
                    {item.name}
                  </AutoCompleteItemButton>
                </AutoCompleteItem>
              );
            })}
          </AutoCompleteContainer>
        )}
      </Root>
    );
  }
}
