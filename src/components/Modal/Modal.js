import React, { Component } from 'react';
import getSymbolFromCurrency from 'currency-symbol-map';
import { ModalAutocomplete } from 'components';
import { ISOCurrentDate } from 'utils';

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

const initialState = {
  isOpen: false,
  coinId: '',
  purchasedAmount: 0,
  date: ISOCurrentDate()
};
export class Modal extends Component {
  ref = React.createRef(null);
  state = initialState;

  toggle = () =>
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen
    }));

  clear = () => {
    this.setState(initialState);
  };

  handleClickOutside = (event) => {
    if (this.state.isOpen && this.ref.current === event.target) {
      this.toggle();
      this.clear();
    }
  };

  handleDropdownChange = (value) => {
    this.setState({
      coinId: value
    });
  };

  handleAmountChange = ({ value }) =>
    this.setState({
      purchasedAmount: value
    });

  handleDateChange = (e) => {
    this.setState({
      date: e.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { coinId, purchasedAmount, date } = this.state;
    if (coinId && purchasedAmount && date) {
      this.props.addAsset({ coinId, purchasedAmount, date });
      this.toggle();
      this.clear();
    }
  };
  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }
  render() {
    const currentCurrency = localStorage.selection;

    const coinsDetails = this.props.supportedCoins.map((coin) => ({
      name: coin.name,
      id: coin.id
    }));

    const resultOfSelection = this.props.supportedCoins.filter(
      ({ id }) => id === this.state.coinId
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
                        value={this.state.date}
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
