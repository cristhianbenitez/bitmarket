import React, { useState, useEffect, useContext } from 'react';
import { Charts, CoinsTable } from 'components';
import coinGecko from 'api/coinGecko';
import {
  ChartContainer,
  ChartWrapper,
  CoinListContainer,
  Container,
  Subtitle
} from './Coins.styles';
import { CenterDiv, Loading } from 'assets';
import { useCurrency } from 'hooks';

export const Coins = () => {
  const [loading, setLoading] = useState(true);
  const [coinPrice, setCoinPrice] = useState([]);
  const [volume24h, setVolume24h] = useState([]);
  const [isVisible, setIsVisible] = useState(10);
  const { value } = useCurrency();

  const getChartData = async () => {
    setLoading(true);
    const [volume24h, coinPrice] = await Promise.all([
      coinGecko.get('/coins/bitcoin/market_chart', {
        params: { vs_currency: value, days: '30', interval: 'daily' }
      }),
      coinGecko.get('/coins/bitcoin/market_chart', {
        params: { vs_currency: value, days: '1', interval: 'hourly' }
      })
    ]);
    const formatData = (data) => data.map(([x, y]) => ({ x, y: y.toFixed(2) }));
    setCoinPrice(formatData(coinPrice.data.prices));
    setVolume24h(formatData(volume24h.data.total_volumes));
    setLoading(false);
  };

  useEffect(() => {
    getChartData();
  }, [value]);

  const show = () => {
    setIsVisible(!isVisible);
  };

  const latestData = {
    latestCoinPrice: coinPrice[coinPrice.length - 1],
    latestVolume24h: volume24h[volume24h.length - 1]
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
            chartData={coinPrice}
            latestData={latestData}
            currency={value}
            show={show}
            lineChart
          />
        </ChartContainer>
        <ChartContainer id="bar-chart">
          <Charts
            chartData={volume24h}
            latestData={latestData}
            currency={value}
            show={show}
            barChart
          />
        </ChartContainer>
      </ChartWrapper>
      <Subtitle>Your overview</Subtitle>
      <CoinListContainer>
        <CoinsTable currency={value} />
      </CoinListContainer>
    </Container>
  );
};
