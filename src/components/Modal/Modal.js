import React, { Component } from 'react';
import getSymbolFromCurrency from 'currency-symbol-map';
import { ModalAutocomplete } from 'components';

import {
  CloseButton,
  ModalButton,
  ModalOverlay,
  ModalContainer,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalTitle,
  RightContent,
  LeftContent,
  CoinImageContainer,
  CoinImage,
  CoinNameText,
  ModalButtons,
  StyledCurrency,
  StyledButton,
  StyledInput
} from './Modal.styles';

export class Modal extends Component {
  ref = React.createRef(null);
  state = {
    isOpen: false,
    coin: '',
    purchasedAmount: 0,
    date: ''
  };

  toggle = () =>
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen
    }));

  clear = () => {
    this.setState({
      isOpen: false,
      coin: '',
      purchasedAmount: 0,
      date: ''
    });
  };

  handleClickOutside = (event) => {
    if (this.state.isOpen && this.ref.current === event.target) {
      this.toggle();
      this.clear();
    }
  };

  handleDropdownChange = (value) => {
    this.setState({
      ...this.state,
      coin: value
    });
  };

  handleAmountChange = ({ value }) =>
    this.setState({
      ...this.state,
      purchasedAmount: value
    });

  handleDateChange = (e) => {
    this.setState({
      ...this.state,
      date: e.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };
  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }
  render() {
    const currentCurrency = localStorage.selection;

    const coinsDetails = this.props.coins.map((coin) => ({
      name: coin.name,
      id: coin.id
    }));

    const resultOfSelection = this.props.coins.filter(
      ({ id }) => id === this.state.coin
    );
    const coinInformation = resultOfSelection[0];

    const minimizedImage = coinInformation?.image.replace('large', 'small');

    return (
      <>
        <ModalButton onClick={this.toggle}>Add Asset</ModalButton>
        {this.state.isOpen && (
          <ModalOverlay ref={this.ref}>
            <ModalContainer>
              <ModalContent>
                <ModalHeader>
                  <ModalTitle>Select Coins</ModalTitle>
                </ModalHeader>
                <form onSubmit={this.handleSubmit}>
                  <ModalBody>
                    <LeftContent>
                      <CoinImageContainer>
                        <CoinImage
                          src={minimizedImage}
                          alt={coinInformation?.id}
                        />
                      </CoinImageContainer>
                      <CoinNameText>
                        {coinInformation?.name}
                        {`(${coinInformation?.symbol.toUpperCase()})`}
                      </CoinNameText>
                    </LeftContent>
                    <RightContent>
                      <ModalAutocomplete
                        data={coinsDetails}
                        handleChange={this.handleDropdownChange}
                      />

                      <StyledCurrency
                        customInput={StyledInput}
                        isNumericString={true}
                        thousandSeparator={true}
                        decimalScale={2}
                        prefix={getSymbolFromCurrency(currentCurrency)}
                        value={this.state.purchasedAmount}
                        onValueChange={this.handleAmountChange}
                      />
                      <StyledInput
                        type="date"
                        onChange={this.handleDateChange}
                      />
                    </RightContent>
                  </ModalBody>
                  <ModalButtons>
                    <StyledButton onClick={this.clear}>Close</StyledButton>
                    <StyledButton type="submit">Save and Continue</StyledButton>
                  </ModalButtons>
                </form>
              </ModalContent>
              <CloseButton onClick={this.clear}>&times;</CloseButton>
            </ModalContainer>
          </ModalOverlay>
        )}
      </>
    );
  }
}
