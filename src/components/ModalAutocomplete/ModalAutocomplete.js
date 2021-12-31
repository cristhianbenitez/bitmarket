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
    text: '',
    suggestions: [...this.props.data]
  };

  onTextChange = (e) => {
    const value = e.target.value;
    let suggestions = [];
    console.log(value);
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, 'i');
      suggestions = this.props.data.sort().filter((v) => regex.test(v.name));
    }
    this.setState({
      isDropdownVisible: true,
      text: value,
      suggestions
    });
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
    const { suggestions } = this.state;

    return (
      <Root>
        <InputContainer onClick={this.toggle}>
          {this.state.text === '' && <Label>Select Coins</Label>}
          <Input
            id="input"
            autoComplete="off"
            defaultValue={this.state.text}
            onChange={this.onTextChange}
            type={'text'}
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
            {suggestions.map((item) => {
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
