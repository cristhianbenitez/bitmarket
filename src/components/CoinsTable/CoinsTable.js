import React, { Component } from 'react';

import coinGecko from 'api/coinGecko';
import { CoinsTableRow } from 'components';
import {
  Table,
  TableBody,
  TableHead,
  TableHeading,
  TableRowHead
} from './CoinsTable.styles';
export class CoinsTable extends Component {
  state = {
    isLoading: false,
    resultsPerPage: 10,
    coinItemData: []
  };
  getCoinItemData = async (currency = 'usd') => {
    this.setState({ isLoading: true });
    const { data } = await coinGecko.get('/coins/markets', {
      params: {
        vs_currency: currency,
        days: '1',
        order: 'market_cap_desc',
        per_page: this.state.resultsPerPage.toString(),
        interval: 'hourly',
        sparkline: true,
        price_change_percentage: '1h,24h,7d'
      }
    });
    this.setState({
      isLoading: false,
      coinItemData: data
    });
  };

  componentDidMount = () => {
    this.getCoinItemData();
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.currency !== this.props.currency) {
      this.getCoinItemData(this.props.currency);
    }
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
          <CoinsTableRow
            coinItemData={this.state.coinItemData}
            currency={this.props.currency}
          />
        </TableBody>
      </Table>
    );
  }
}
