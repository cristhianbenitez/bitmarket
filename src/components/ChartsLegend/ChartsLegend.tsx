import getSymbolFromCurrency from 'currency-symbol-map';
import { formattedNumber, todayDate } from 'utils';
import {
  Arrow,
  ArrowsContainer,
  Legend,
  CoinInfo,
  CoinInfoDate,
  CoinInfoTitle,
  CoinInfoValue
} from './ChartsLegend.styles';

interface ChartsLegendProps {
  latestPrices: {
    Volume24h: number;
    CoinPrice: number;
  };
  lineChart: boolean;
  currency: string;
  changeVisibility?: () => void;
}

export const ChartsLegend = (props: ChartsLegendProps) => {
  const latestCoinPrice = formattedNumber(
    props.latestPrices.CoinPrice,
    `(10,000.00)`
  );
  const latestVolume24h = formattedNumber(
    props.latestPrices.Volume24h,
    '(0.000a)'
  );
  const currencySymbol = getSymbolFromCurrency(props.currency);

  return (
    <Legend>
      <CoinInfo>
        <CoinInfoTitle>
          {props.lineChart ? 'Bitcoin' : 'Volume 24h'}
        </CoinInfoTitle>
        <CoinInfoValue>
          {currencySymbol}
          {props.lineChart ? latestCoinPrice : latestVolume24h}
        </CoinInfoValue>
        <CoinInfoDate>{todayDate} </CoinInfoDate>
      </CoinInfo>
      <ArrowsContainer>
        <Arrow left onClick={props.changeVisibility} />
        <Arrow onClick={props.changeVisibility} />
      </ArrowsContainer>
    </Legend>
  );
};
