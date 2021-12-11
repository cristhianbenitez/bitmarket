import { formattedNumber } from 'utils';
import {
  MarketDataItem,
  MarketDataList,
  MarketDataText,
  MarketDataTitle,
  PlusIcon
} from './MarketDataInfo.styles';

export const MarketDataInfo = (props) => {
  return (
    <MarketDataList>
      <MarketDataItem>
        <PlusIcon />
        <MarketDataTitle> Market Cap:</MarketDataTitle>
        <MarketDataText>${formattedNumber(props.marketCap)}</MarketDataText>
      </MarketDataItem>
      <MarketDataItem>
        <PlusIcon />
        <MarketDataTitle>Fully Diluted Valuation:</MarketDataTitle>
        <MarketDataText>
          ${formattedNumber(props.fullyDilutedVal)}
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
        <MarketDataText>${formattedNumber(props.totalVolume)}</MarketDataText>
      </MarketDataItem>
      <MarketDataItem>
        <PlusIcon />
        <MarketDataTitle> Circulating Supply:</MarketDataTitle>
        <MarketDataText>
          ${formattedNumber(props.circulatingSupply)}
        </MarketDataText>
      </MarketDataItem>
      <MarketDataItem>
        <PlusIcon />
        <MarketDataTitle> Max Supply:</MarketDataTitle>
        <MarketDataText>${formattedNumber(props.maxSupply)}</MarketDataText>
      </MarketDataItem>
    </MarketDataList>
  );
};
