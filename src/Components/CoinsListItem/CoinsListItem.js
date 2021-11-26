import React, { Component } from 'react';
import {
  TableData,
  PercentageBar,
  PercentageBarFill,
  PercentageBarContainer,
  ValuesContainer,
  Value,
  TableRow,
  BulletCircle,
  PriceChangePercentage,
  GreenArrowUp,
  NameContainer,
  RedArrowDown,
  CoinIcon,
  StyledLink
} from './CoinsListItem.styles';
import {
  calculatePercentage,
  convertToPositive,
  formattedNumber
} from '../../Utils';
export class CoinsListItem extends Component {
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
        price_change_percentage_1h_in_currency,
        price_change_percentage_24h_in_currency,
        price_change_percentage_7d_in_currency
      } = coinInfo;

      const renderRedOrGreenArrow = (price) =>
        price < 0 ? <RedArrowDown /> : <GreenArrowUp />;

      const leftSideColors = [
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
      ];
      const rightSideColors = [
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
      ];

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
          <TableData>${current_price}</TableData>
          <PriceChangePercentage price={price_change_percentage_1h_in_currency}>
            {renderRedOrGreenArrow(price_change_percentage_1h_in_currency)}
            {convertToPositive(price_change_percentage_1h_in_currency)}%
          </PriceChangePercentage>
          <PriceChangePercentage
            price={price_change_percentage_24h_in_currency}
          >
            {renderRedOrGreenArrow(price_change_percentage_24h_in_currency)}
            {convertToPositive(price_change_percentage_24h_in_currency)}%
          </PriceChangePercentage>
          <PriceChangePercentage price={price_change_percentage_7d_in_currency}>
            {renderRedOrGreenArrow(price_change_percentage_7d_in_currency)}
            {convertToPositive(price_change_percentage_7d_in_currency)}%
          </PriceChangePercentage>
          <TableData>
            <PercentageBarContainer>
              <ValuesContainer>
                <Value colors={leftSideColors[index % leftSideColors.length]}>
                  <BulletCircle
                    colors={leftSideColors[index % leftSideColors.length]}
                  />
                  {formattedNumber(total_volume, '($ 0.00a)')}
                </Value>
                <Value colors={rightSideColors[index % rightSideColors.length]}>
                  <BulletCircle
                    colors={rightSideColors[index % rightSideColors.length]}
                  />
                  {formattedNumber(market_cap, '($ 0.00a)')}
                </Value>
              </ValuesContainer>

              <PercentageBar
                colors={rightSideColors[index % rightSideColors.length]}
              >
                <PercentageBarFill
                  colors={leftSideColors[index % leftSideColors.length]}
                  percentage={calculatePercentage(total_volume, market_cap)}
                />
              </PercentageBar>
            </PercentageBarContainer>
          </TableData>
          <TableData>
            <PercentageBarContainer>
              <ValuesContainer>
                <Value colors={leftSideColors[index % leftSideColors.length]}>
                  <BulletCircle
                    colors={leftSideColors[index % leftSideColors.length]}
                  />
                  {formattedNumber(circulating_supply, '($ 0.00a)')}
                </Value>
                <Value colors={rightSideColors[index % rightSideColors.length]}>
                  <BulletCircle
                    colors={rightSideColors[index % rightSideColors.length]}
                  />
                  {formattedNumber(total_supply, '($ 0.00a)')}
                </Value>
              </ValuesContainer>
              <PercentageBar
                colors={rightSideColors[index % rightSideColors.length]}
              >
                <PercentageBarFill
                  colors={leftSideColors[index % leftSideColors.length]}
                  percentage={calculatePercentage(
                    circulating_supply,
                    total_supply
                  )}
                />
              </PercentageBar>
            </PercentageBarContainer>
          </TableData>
          <TableData>24px</TableData>
        </TableRow>
      );
    });
  }
}
