import React, { Component } from 'react';

import coinGecko from 'api/coinGecko';
import { CoinsListItem } from 'components';
import {
  Table,
  TableBody,
  TableHead,
  TableHeading,
  TableRowHead
} from './CoinsList.styles';
export class CoinsList extends Component {
  state = {
    isLoading: false,
    resultsPerPage: 10,
    coinItemData: []
  };
  getCoinItemData = async () => {
    this.setState({ ...this.state, isLoading: true });
    const { data } = await coinGecko.get('/coins/markets', {
      params: {
        vs_currency: 'usd',
        days: '1',
        order: 'market_cap_desc',
        per_page: this.state.resultsPerPage.toString(),
        interval: 'hourly',
        sparkline: true,
        price_change_percentage: '1h,24h,7d'
      }
    });
    this.setState({
      ...this.state,
      isLoading: false,
      coinItemData: data
    });
  };
  componentDidMount = () => {
    this.getCoinItemData();
  };
  render() {
    return (
      <Table>
        <TableHead>
          <TableRowHead>
            <TableHeading>#</TableHeading>
            <TableHeading>Name</TableHeading>
            <TableHeading>Price</TableHeading>
            <TableHeading>1h%</TableHeading>
            <TableHeading>24h%</TableHeading>
            <TableHeading>7d%</TableHeading>
            <TableHeading>24h Volume/Market Cap</TableHeading>
            <TableHeading>Circulating/Total Supply</TableHeading>
            <TableHeading>Last 7d</TableHeading>
          </TableRowHead>
        </TableHead>
        <TableBody>
          <CoinsListItem coinItemData={this.state.coinItemData} />
        </TableBody>
      </Table>
    );
  }
}
