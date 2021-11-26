import React, { Component } from 'react';
import coinGecko from '../../Api/coinGecko';
import { CoinInfo } from '../../Components/ChartsLegend/ChartsLegend.styles';
import { withRouter } from '../../Helpers';
import {
  CoinImageContainer,
  CoinWebsiteLink,
  Container,
  Subtitle,
  TopContentContainer
} from '../CoinInformation/CoinInformation.styles';

class CoinInformation extends Component {
  state = {
    isLoading: false,
    coinInfo: [],
    coinId: this.props.location.pathname.slice(6)
  };

  getCoinInformation = async () => {
    this.setState({ ...this.state, isLoading: true });
    const { data } = await coinGecko.get(`/coins/${this.state.coinId}`, {
      params: {
        market_data: 'true',
        localization: 'false',
        tickers: 'false',
        interval: 'daily',
        community_data: 'false',
        developer_data: 'false',
        sparkline: 'false'
      }
    });

    this.setState({
      ...this.state,
      isLoading: false,
      coinInfo: data
    });
  };

  componentDidMount = () => {
    this.getCoinInformation();
  };
  render() {
    console.log(this.state.coinInfo);
    const { name } = this.state.coinInfo;
    return (
      <Container>
        <Subtitle>Your Summary</Subtitle>
        <TopContentContainer>
          <CoinInfo>
            <CoinImageContainer> {name}</CoinImageContainer>
            <CoinWebsiteLink>Coin Website</CoinWebsiteLink>
          </CoinInfo>
          <CoinInfo>
            <span></span>
          </CoinInfo>
          <div>{/* Coin Big Picture */}</div>
        </TopContentContainer>
        <div>
          <div>
            {/* Description Text
             */}
          </div>
          <div>{/* WEBSITES */}</div>
        </div>
      </Container>
    );
  }
}

export const WrappedCoinInformation = withRouter(CoinInformation);
