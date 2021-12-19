import React, { Component } from 'react';
import { TextField } from '@mui/material';
import getSymbolFromCurrency from 'currency-symbol-map';

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
  StyledDropdown,
  ModalButtons,
  StyledPaper,
  StyledListbox,
  StyledDate,
  StyledCurrency,
  StyledButton
} from './Modal.styles';

export class Modal extends Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef(null);
  }
  state = {
    isOpen: false,
    coin: '',
    purchasedAmount: '',
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

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    const currentCurrency = localStorage.selection;

    const coinsDetails = this.props.coins.map((coin) => {
      return { name: coin.name, id: coin.id };
    });

    const coinInformation = this.props.coins.filter(
      ({ id }) => id === this.state.coin
    );

    const minimizedImage = coinInformation[0]?.image.replace('large', 'small');

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
                          alt={coinInformation[0]?.id}
                        />
                      </CoinImageContainer>
                      <CoinNameText>
                        {coinInformation[0]?.name}
                        {`(${coinInformation[0]?.symbol.toUpperCase()})`}
                      </CoinNameText>
                    </LeftContent>
                    <RightContent>
                      <StyledDropdown
                        options={coinsDetails}
                        isOptionEqualToValue={(props) => props.name}
                        getOptionLabel={(option) => option.name}
                        PaperComponent={StyledPaper}
                        ListboxComponent={StyledListbox}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            name="coin"
                            label="Select Coins"
                          />
                        )}
                        onChange={(_, value) => {
                          this.setState({
                            ...this.state,
                            coin: value?.id || ''
                          });
                        }}
                      />

                      <StyledCurrency
                        customInput={TextField}
                        isNumericString={true}
                        thousandSeparator={true}
                        decimalScale={2}
                        InputProps={{
                          startAdornment: (
                            <p>
                              {getSymbolFromCurrency(currentCurrency)}&nbsp;
                            </p>
                          )
                        }}
                        label="Purchased Amount"
                        variant="outlined"
                        value={this.state.purchasedAmount}
                        onValueChange={({ value }) =>
                          this.setState({
                            ...this.state,
                            purchasedAmount: value
                          })
                        }
                      />
                      <StyledDate
                        label="Purchased Date"
                        type="date"
                        InputLabelProps={{
                          shrink: true
                        }}
                        onChange={(e) => {
                          this.setState({
                            ...this.state,
                            date: e.target.value
                          });
                        }}
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
