import React, { Component } from 'react';
import {
  calculatePercentage,
  displayPositiveNumber,
  formattedNumber
} from 'utils';
import { Charts } from 'components';
import {
  BulletCircle,
  CoinIcon,
  GreenArrowUp,
  NameContainer,
  PercentageBar,
  PercentageBarContainer,
  PercentageBarFill,
  PriceChangePercentage,
  RedArrowDown,
  SmallChartContainer,
  StyledLink,
  TableData,
  TableRow,
  Value,
  ValuesContainer
} from './CoinsTableRow.styles';
import getSymbolFromCurrency from 'currency-symbol-map';
export class CoinsTableRow extends Component {
  render() {
    return this.props.coinItemData.map((coinInfo, index) => {
      const {
        name,
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
      } = coinInfo;

      const directionIndicator = (price) => {
        const isPositive = price > 0;
        return isPositive ? <GreenArrowUp /> : <RedArrowDown />;
      };
      const percentageBarColors = {
        left: [
          '#FFB528',
          '#474C77',
          '#1BA27A',
          '#BB9F33',
          '#FE7D43',
          '#B3404A',
          '#2775C9',
          '#83808B',
          '#345D9D',
          '#A76558'
        ],
        right: [
          '#FEE158',
          '#8A92B2',
          '#FFFFFF',
          '#E4CD82',
          '#FFDCCE',
          '#F4B2B0',
          '#FFFFFF',
          '#F09242',
          '#FFFFFF',
          '#728D86'
        ]
      };

      const leftSideColors =
        percentageBarColors.left[index % percentageBarColors.left.length];

      const rightSideColors =
        percentageBarColors.right[index % percentageBarColors.right.length];

      const currencySymbol = getSymbolFromCurrency(this.props.currency);

      return (
        <TableRow key={index}>
          <TableData>{index + 1}</TableData>
          <TableData>
            <StyledLink to={`coin/${name.split(' ').join('').toLowerCase()}`}>
              <NameContainer>
                <CoinIcon src={`${image}`} alt={`${name}-icon`} />
                {name}
                {`(${symbol.toUpperCase()})`}
              </NameContainer>
            </StyledLink>
          </TableData>
          <TableData>
            {currencySymbol}
            {current_price}
          </TableData>
          <PriceChangePercentage price={hourlyChanges}>
            {directionIndicator(hourlyChanges)}
            {displayPositiveNumber(hourlyChanges)}%
          </PriceChangePercentage>
          <PriceChangePercentage price={dailyChanges}>
            {directionIndicator(dailyChanges)}
            {displayPositiveNumber(dailyChanges)}%
          </PriceChangePercentage>
          <PriceChangePercentage price={weeklyChanges}>
            {directionIndicator(weeklyChanges)}
            {displayPositiveNumber(weeklyChanges)}%
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
                  percentage={calculatePercentage(
                    circulating_supply,
                    total_supply
                  )}
                />
              </PercentageBar>
            </PercentageBarContainer>
          </TableData>
          <TableData>
            <SmallChartContainer>
              <Charts
                smallChartData={pricesOfLastSevenDays.price.filter(
                  (_, i) => i % 24 === 0
                )}
                weeklyChanges={weeklyChanges}
                smallLineChart
              />
            </SmallChartContainer>
          </TableData>
        </TableRow>
      );
    });
  }
}
