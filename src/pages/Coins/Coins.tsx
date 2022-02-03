import React from 'react';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { CenterDiv, Loading } from 'assets';
import { getChartsData } from 'store/reducers/chartsData/chartsDataSlice';

import { Charts, CoinsTable, Footer } from 'components';
import {
  ChartContainer,
  ChartWrapper,
  CoinListContainer,
  Container,
  Subtitle
} from './Coins.styles';

export const Coins = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const currency = useAppSelector((state) => state.currency);
  const { isLoading, volumes24h, prices30d } = useAppSelector(
    (state) => state.chartsData
  );
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(getChartsData({ currency }));
  }, [currency]);

  const changeVisibility = () => {
    setIsVisible(!isVisible);
  };

  const latestData = {
    latestCoinPrice: prices30d[prices30d?.length - 1],
    latestVolume24h: volumes24h[volumes24h?.length - 1]
  };

  if (isLoading)
    return (
      <CenterDiv>
        <Loading type="spin" />
      </CenterDiv>
    );

  return (
    <Container>
      <Subtitle>Your overview</Subtitle>
      <ChartWrapper isVisible={isVisible}>
        <ChartContainer id="line-chart">
          <Charts
            chartData={prices30d}
            latestData={latestData}
            currency={currency}
            type="lineChart"
            changeVisibility={changeVisibility}
          />
        </ChartContainer>
        <ChartContainer id="bar-chart">
          <Charts
            chartData={volumes24h}
            latestData={latestData}
            currency={currency}
            type="barChart"
            changeVisibility={changeVisibility}
          />
        </ChartContainer>
      </ChartWrapper>
      <Subtitle>Your overview</Subtitle>
      <CoinListContainer>
        <CoinsTable />
      </CoinListContainer>
      <Footer />
    </Container>
  );
};
