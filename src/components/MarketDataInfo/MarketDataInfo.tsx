import { formattedNumber } from 'utils';
import {
  MarketDataItem,
  MarketDataList,
  MarketDataText,
  MarketDataTitle,
  PlusIcon
} from './MarketDataInfo.styles';

interface MarketDataProps {
  circulatingSupply: number;
  currencySymbol?: string;
  fullyDilutedVal: string;
  marketCap: number;
  maxSupply: number;
  symbol: string;
  totalVolume: number;
}

export const MarketDataInfo = (props: MarketDataProps) => {
  const coinSymbol = props.symbol.toUpperCase();
  return (
    <MarketDataList>
      <MarketDataItem>
        <PlusIcon />
        <MarketDataTitle> Market Cap:</MarketDataTitle>
        <MarketDataText>
          {props.currencySymbol}
          {formattedNumber(props.marketCap)}
        </MarketDataText>
      </MarketDataItem>
      <MarketDataItem>
        <PlusIcon />
        <MarketDataTitle>Fully Diluted Valuation:</MarketDataTitle>
        <MarketDataText>
          {props.currencySymbol}
          {formattedNumber(props.fullyDilutedVal)}
        </MarketDataText>
      </MarketDataItem>
      <MarketDataItem>
        <PlusIcon />
        <MarketDataTitle>Volume / Market:</MarketDataTitle>
        <MarketDataText>
          {(props.totalVolume / props.marketCap).toFixed(5)}
        </MarketDataText>
      </MarketDataItem>
      <MarketDataItem>
        <PlusIcon />
        <MarketDataTitle> Total Volume:</MarketDataTitle>
        <MarketDataText>
          {props.currencySymbol}
          {formattedNumber(props.totalVolume)}
        </MarketDataText>
      </MarketDataItem>
      <MarketDataItem>
        <PlusIcon />
        <MarketDataTitle> Circulating Supply:</MarketDataTitle>
        <MarketDataText>
          {coinSymbol}&nbsp;
          {formattedNumber(props.circulatingSupply)}
        </MarketDataText>
      </MarketDataItem>
      <MarketDataItem>
        <PlusIcon />
        <MarketDataTitle> Max Supply:</MarketDataTitle>
        <MarketDataText>
          {coinSymbol}&nbsp;
          {formattedNumber(props.maxSupply)}
        </MarketDataText>
      </MarketDataItem>
    </MarketDataList>
  );
};
