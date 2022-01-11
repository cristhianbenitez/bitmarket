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

export const ChartsLegend = (props) => {
  const latestCoinPrice = formattedNumber(
    props.latestData.latestCoinPrice?.y,
    `10,000.00`
  );
  const latestVolume24h = formattedNumber(
    props.latestData.latestVolume24h?.y,
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
        <Arrow left onClick={props.show} />
        <Arrow onClick={props.show} />
      </ArrowsContainer>
    </Legend>
  );
};
