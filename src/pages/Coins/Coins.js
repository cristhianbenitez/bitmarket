import React, { useState, useEffect } from 'react';

import { Charts, CoinsTable } from 'components';
import {
  ChartContainer,
  ChartWrapper,
  CoinListContainer,
  Container,
  Subtitle
} from './Coins.styles';
import { CenterDiv, Loading } from 'assets';
import { useDispatch, useSelector } from 'react-redux';
import { getChartsData } from 'store/reducers/chartsData/chartsDataSlice';

export const Coins = () => {
  const [isVisible, setIsVisible] = useState(false);
  const currency = useSelector((state) => state.currency);
  const { loading, volumes24h, prices30d } = useSelector(
    (state) => state.chartsData
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getChartsData({ currency }));
  }, [currency]);

  const show = () => {
    setIsVisible(!isVisible);
  };

  const latestData = {
    latestCoinPrice: prices30d[prices30d.length - 1],
    latestVolume24h: volumes24h[volumes24h.length - 1]
  };

  if (loading)
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
            show={show}
            lineChart
          />
        </ChartContainer>
        <ChartContainer id="bar-chart">
          <Charts
            chartData={volumes24h}
            latestData={latestData}
            currency={currency}
            show={show}
            barChart
          />
        </ChartContainer>
      </ChartWrapper>
      <Subtitle>Your overview</Subtitle>
      <CoinListContainer>
        <CoinsTable currency={currency} />
      </CoinListContainer>
    </Container>
  );
};
