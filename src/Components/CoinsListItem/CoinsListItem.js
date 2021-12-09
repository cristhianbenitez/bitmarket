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
} from './CoinsListItem.styles';
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
        price_change_percentage_1h_in_currency: hourlyChanges,
        price_change_percentage_24h_in_currency: dailyChanges,
        price_change_percentage_7d_in_currency: weeklyChanges,
        sparkline_in_7d: pricesOfLastSevenDays
      } = coinInfo;

      const conditionalRenderArrow = (price) =>
        price < 0 ? <RedArrowDown /> : <GreenArrowUp />;

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
          <PriceChangePercentage price={hourlyChanges}>
            {conditionalRenderArrow(hourlyChanges)}
            {displayPositiveNumber(hourlyChanges)}%
          </PriceChangePercentage>
          <PriceChangePercentage price={dailyChanges}>
            {conditionalRenderArrow(dailyChanges)}
            {displayPositiveNumber(dailyChanges)}%
          </PriceChangePercentage>
          <PriceChangePercentage price={weeklyChanges}>
            {conditionalRenderArrow(weeklyChanges)}
            {displayPositiveNumber(weeklyChanges)}%
          </PriceChangePercentage>
          <TableData>
            <PercentageBarContainer>
              <ValuesContainer>
                <Value
                  colors={
                    percentageBarColors.left[
                      index % percentageBarColors.left.length
                    ]
                  }
                >
                  <BulletCircle
                    colors={
                      percentageBarColors.left[
                        index % percentageBarColors.left.length
                      ]
                    }
                  />
                  {formattedNumber(total_volume, '($ 0.00a)')}
                </Value>
                <Value
                  colors={
                    percentageBarColors.right[
                      index % percentageBarColors.right.length
                    ]
                  }
                >
                  <BulletCircle
                    colors={
                      percentageBarColors.right[
                        index % percentageBarColors.right.length
                      ]
                    }
                  />
                  {formattedNumber(market_cap, '($ 0.00a)')}
                </Value>
              </ValuesContainer>

              <PercentageBar
                colors={
                  percentageBarColors.right[
                    index % percentageBarColors.right.length
                  ]
                }
              >
                <PercentageBarFill
                  colors={
                    percentageBarColors.left[
                      index % percentageBarColors.left.length
                    ]
                  }
                  percentage={calculatePercentage(total_volume, market_cap)}
                />
              </PercentageBar>
            </PercentageBarContainer>
          </TableData>
          <TableData>
            <PercentageBarContainer>
              <ValuesContainer>
                <Value
                  colors={
                    percentageBarColors.left[
                      index % percentageBarColors.left.length
                    ]
                  }
                >
                  <BulletCircle
                    colors={
                      percentageBarColors.left[
                        index % percentageBarColors.left.length
                      ]
                    }
                  />
                  {formattedNumber(circulating_supply, '($ 0.00a)')}
                </Value>
                <Value
                  colors={
                    percentageBarColors.right[
                      index % percentageBarColors.right.length
                    ]
                  }
                >
                  <BulletCircle
                    colors={
                      percentageBarColors.right[
                        index % percentageBarColors.right.length
                      ]
                    }
                  />
                  {formattedNumber(total_supply, '($ 0.00a)')}
                </Value>
              </ValuesContainer>
              <PercentageBar
                colors={
                  percentageBarColors.right[
                    index % percentageBarColors.right.length
                  ]
                }
              >
                <PercentageBarFill
                  colors={
                    percentageBarColors.left[
                      index % percentageBarColors.left.length
                    ]
                  }
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
