import React, { useState, useEffect, useRef, useReducer } from 'react';
import getSymbolFromCurrency from 'currency-symbol-map';
import { ISOCurrentDate } from 'utils';
import { ModalAutocomplete } from 'components';

import {
  CloseButton,
  ModalOverlay,
  ModalContainer,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalTitle,
  CoinImageContainer,
  CoinImage,
  CoinNameText,
  ModalFooter,
  StyledCurrency,
  StyledButton,
  StyledInput,
  BodyContent
} from './Modal.styles';
import coinGecko from 'api/coinGecko';

export const Modal = (props) => {
  const [loading, setLoading] = useState(false);
  const [supportedCoins, setSupportedCoins] = useState([]);
  const [coinID, setCoinID] = useState('');
  const [purchasedAmount, setPurchasedAmount] = useState(0);
  const [date, setDate] = useState(ISOCurrentDate());
  const ref = useRef();

  const getSupportedCoins = async () => {
    setLoading(true);
    try {
      const { data } = await coinGecko.get(`/coins/markets`, {
        params: {
          vs_currency: 'usd',
          per_page: '250'
        }
      });
      const coins = data.map(({ name, id, image, symbol }) => ({
        name,
        id,
        image,
        symbol
      }));
      setLoading(false);
      setSupportedCoins(coins);
    } catch (error) {}
  };

  const clearState = () => {
    setCoinID('');
    setPurchasedAmount(0);
    setDate(ISOCurrentDate());
    props.setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (props.isOpen && ref.current === event.target) {
      props.setIsOpen(false);
      clearState();
    }
  };

  const handleDropdownChange = (value) => setCoinID(value);
  const handleAmountChange = ({ value }) => setPurchasedAmount(value);
  const handleDateChange = ({ target: { value } }) => setDate(value);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (coinID && purchasedAmount && date) {
      props.addAsset({ coinID, purchasedAmount, date });
      props.setIsOpen(false);
      clearState();
    }
  };

  useEffect(() => {
    getSupportedCoins();
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const currentCurrency = localStorage.selection;
  const resultOfSelection = supportedCoins.filter(({ id }) => id === coinID);
  const coinInformation = resultOfSelection[0];
  const minimizedImage = coinInformation?.image.replace('large', 'small');

  return (
    <ModalOverlay ref={ref}>
      <ModalContainer>
        <CloseButton onClick={clearState}>&times;</CloseButton>
        <ModalContent>
          <ModalHeader>
            <ModalTitle>Select Coins</ModalTitle>
          </ModalHeader>
          <form onSubmit={handleSubmit}>
            <ModalBody>
              <BodyContent>
                <CoinImageContainer>
                  <CoinImage src={minimizedImage} alt={coinInformation?.id} />
                </CoinImageContainer>
                <CoinNameText>
                  {coinInformation?.name}
                  {`(${coinInformation?.symbol?.toUpperCase()})`}
                </CoinNameText>
              </BodyContent>
              <BodyContent>
                <ModalAutocomplete
                  data={supportedCoins}
                  handleChange={handleDropdownChange}
                />
                <StyledCurrency
                  customInput={StyledInput}
                  isNumericString={true}
                  thousandSeparator={true}
                  decimalScale={2}
                  prefix={getSymbolFromCurrency(currentCurrency)}
                  value={purchasedAmount}
                  onValueChange={handleAmountChange}
                />
                <StyledInput
                  type="date"
                  onChange={handleDateChange}
                  value={date}
                />
              </BodyContent>
            </ModalBody>
            <ModalFooter>
              <StyledButton onClick={clearState}>Close</StyledButton>
              <StyledButton type="submit">Save and Continue</StyledButton>
            </ModalFooter>
          </form>
        </ModalContent>
      </ModalContainer>
    </ModalOverlay>
  );
};
