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
import { getAssetData } from 'store/reducers/assetsList/assetsListSlice';
import { ItemInterface } from 'components/ModalAutocomplete/ModalAutocomplete';

const initialAssetState = {
  coinId: '',
  purchasedAmount: 0,
  date: ISOCurrentDate()
};

const initialSelectionState = {
  image: '',
  name: 'Coin',
  symbol: 'Symbol'
};

export const Modal = ({ setIsOpen }: { setIsOpen: (p: boolean) => void }) => {
  const currency = useAppSelector(selectCurrency);
  const [asset, setAsset] = React.useState(initialAssetState);
  const [selection, setSelection] = React.useState(initialSelectionState);

  const ref = React.useRef(null);
  const dispatch = useAppDispatch();

  useOnClickOutside(ref, () => {
    setIsOpen(false);
    clearState();
  });

  const clearState = () => {
    setAsset(initialAssetState);
    setIsOpen(false);
  };

  const handleItemSelected = (item: ItemInterface) => {
    const minimizedImage = item.large.replace('large', 'small');
    setAsset({ ...asset, coinId: item.id });
    setSelection({
      name: item.name,
      symbol: item.symbol,
      image: minimizedImage
    });
  };

  const handleAmountChange = ({ value }: { value: number | string }) => {
    const newAmount = Number(value);
    setAsset({ ...asset, purchasedAmount: newAmount });
  };

  const handleDateChange = ({ target }: { target: { value: string } }) =>
    setAsset({ ...asset, date: target.value });

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (asset) {
      dispatch(getAssetData(asset));
      setIsOpen(false);
      clearState();
    }
  };

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
                  <CoinImage src={selection.image} alt={asset.coinId} />
                </CoinImageContainer>
                <CoinNameText>
                  {selection.name}
                  {`(${selection?.symbol.toUpperCase()})`}
                </CoinNameText>
              </BodyContent>
              <BodyContent>
                <ModalAutocomplete handleItemSelected={handleItemSelected} />
                <StyledCurrency
                  customInput={StyledInput}
                  isNumericString={true}
                  thousandSeparator={true}
                  decimalScale={2}
                  prefix={getSymbolFromCurrency(currency)}
                  value={asset.purchasedAmount}
                  onValueChange={handleAmountChange}
                />
                <StyledInput
                  type="date"
                  onChange={handleDateChange}
                  value={asset.date}
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
