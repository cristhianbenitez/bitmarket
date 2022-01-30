import React from 'react';
import {
  calculatePercentage,
  displayPositiveNumber,
  formattedNumber,
  percentageBarColors
} from 'utils';
import { Charts } from 'components';
import {
  BulletCircle,
  CoinIcon,
  NameContainer,
  PercentageBar,
  PercentageBarContainer,
  PercentageBarFill,
  PriceChangePercentage,
  SmallChartContainer,
  ArrowIcon,
  StyledLink,
  TableData,
  TableRow,
  Value,
  ValuesContainer,
  CenterDiv,
  CoinName,
  Symbol
} from './CoinsTableRow.styles';
import getSymbolFromCurrency from 'currency-symbol-map';

interface Props {
  coinData: any;
  index: number;
  value: string;
}

export const CoinsTableRow = ({ coinData, index, value }: Props) => {
  const {
    name,
    id,
    image,
    symbol,
    current_price,
    market_cap,
    total_volume,
    circulating_supply,
    total_supply,
    price_change_percentage_1h_in_currency: hourlyChanges,
    price_change_percentage_24h_in_currency: dailyChanges,
    price_change_percentage_7d_in_currency: weeklyChanges,
    sparkline_in_7d: pricesOfLastSevenDays
  } = coinData;

  const leftSideColors =
    percentageBarColors.left[index % percentageBarColors.left.length];

  const rightSideColors =
    percentageBarColors.right[index % percentageBarColors.right.length];

  const currencySymbol = getSymbolFromCurrency(value);
  const minimizedImage: string = image.replace('large', 'small');

  return (
    <TableRow>
      <TableData>{index + 1}</TableData>
      <TableData>
        <StyledLink to={`coin/${id}`}>
          <NameContainer>
            <CoinIcon src={minimizedImage} alt={`${name}-icon`} />
            <CoinName>
              {name}
              <Symbol>({symbol})</Symbol>
            </CoinName>
          </NameContainer>
        </StyledLink>
      </TableData>
      <TableData>
        {currencySymbol}
        {current_price}
      </TableData>
      <PriceChangePercentage price={hourlyChanges}>
        <CenterDiv>
          <ArrowIcon price={hourlyChanges} />
          {displayPositiveNumber(hourlyChanges)}%
        </CenterDiv>
      </PriceChangePercentage>
      <PriceChangePercentage price={dailyChanges}>
        <CenterDiv>
          <ArrowIcon price={dailyChanges} />
          {displayPositiveNumber(dailyChanges)}%
        </CenterDiv>
      </PriceChangePercentage>
      <PriceChangePercentage price={weeklyChanges}>
        <CenterDiv>
          <ArrowIcon price={weeklyChanges} />
          {displayPositiveNumber(weeklyChanges)}%
        </CenterDiv>
      </PriceChangePercentage>
      <TableData>
        <PercentageBarContainer>
          <ValuesContainer>
            <Value colors={leftSideColors}>
              <BulletCircle colors={leftSideColors} />
              {currencySymbol}
              {formattedNumber(total_volume, '(0.00a)')}
            </Value>
            <Value colors={rightSideColors}>
              <BulletCircle colors={rightSideColors} />
              {currencySymbol}
              {formattedNumber(market_cap, '(0.00a)')}
            </Value>
          </ValuesContainer>

          <PercentageBar colors={rightSideColors}>
            <PercentageBarFill
              colors={leftSideColors}
              percentage={calculatePercentage(total_volume, market_cap)}
            />
          </PercentageBar>
        </PercentageBarContainer>
      </TableData>
      <TableData>
        <PercentageBarContainer>
          <ValuesContainer>
            <Value colors={leftSideColors}>
              <BulletCircle colors={leftSideColors} />
              {currencySymbol}
              {formattedNumber(circulating_supply, '(0.00a)')}
            </Value>
            <Value colors={rightSideColors}>
              <BulletCircle colors={rightSideColors} />
              {currencySymbol}
              {formattedNumber(total_supply, '(0.00a)')}
            </Value>
          </ValuesContainer>
          <PercentageBar colors={rightSideColors}>
            <PercentageBarFill
              colors={leftSideColors}
              percentage={calculatePercentage(circulating_supply, total_supply)}
            />
          </PercentageBar>
        </PercentageBarContainer>
      </TableData>
      <TableData>
        <SmallChartContainer>
          <Charts
            chartData={pricesOfLastSevenDays.price.filter(
              (_: any, i: number) => i % 24 === 0
            )}
            weeklyChanges={weeklyChanges}
            type="smallLineChart"
          />
        </SmallChartContainer>
      </TableData>
    </TableRow>
  );
};