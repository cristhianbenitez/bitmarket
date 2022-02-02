import React from 'react';
import { selectCurrency } from 'store/reducers/currency/currencySlice';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import useOnClickOutside from 'use-onclickoutside';

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
import { getAssetData } from 'store/reducers/assetsList/assetsListSlice';

interface SupportedCoins {
  name: string;
  id: string;
  image: string;
  symbol: string;
}

interface Props {
  isOpen: boolean;
  setIsOpen: (p: boolean) => void;
}

export const Modal = ({ isOpen, setIsOpen }: Props) => {
  const currency = useAppSelector(selectCurrency);
  const [supportedCoins, setSupportedCoins] = React.useState<[]>([]);
  const [coinID, setCoinID] = React.useState('');
  const [purchasedAmount, setPurchasedAmount] = React.useState<number>(0);
  const [date, setDate] = React.useState(ISOCurrentDate());
  const ref = React.useRef(null);
  const dispatch = useAppDispatch();
  const addAsset = (asset: {
    coinID: string;
    purchasedAmount: number;
    date: string;
  }) => dispatch(getAssetData(asset));
  useOnClickOutside(ref, () => {
    setIsOpen(false);
    clearState();
  });

  useOnClickOutside(ref, () => {
    setIsOpen(false);
    clearState();
  });

  const getSupportedCoins = async () => {
    const { data } = await coinGecko.get(`/coins/markets`, {
      params: {
        vs_currency: 'usd',
        per_page: '250'
      }
    });
    const coins: [] = data.map(
      ({ name, id, image, symbol }: SupportedCoins) => ({
        name,
        id,
        image,
        symbol
      })
    );
    setSupportedCoins(coins);
  };

  const clearState = () => {
    setCoinID('');
    setPurchasedAmount(0);
    setDate(ISOCurrentDate());
    setIsOpen(false);
  };

  const handleDropdownChange = (value: string) => setCoinID(value);
  const handleAmountChange = ({ value }: { value: number | string }) => {
    setPurchasedAmount(Number(value));
  };
  const handleDateChange = ({ target }: { target: { value: string } }) =>
    setDate(target.value);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (coinID && purchasedAmount && date) {
      addAsset({ coinID, purchasedAmount, date });
      setIsOpen(false);
      clearState();
    }
  };

  const resultOfSelection = supportedCoins.filter(({ id }) => id === coinID);
  const coinInformation: any = resultOfSelection[0];
  const minimizedImage = coinInformation?.image.replace('large', 'small');

  return (
    <ModalOverlay>
      <ModalContainer ref={ref}>
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
                  prefix={getSymbolFromCurrency(currency)}
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
