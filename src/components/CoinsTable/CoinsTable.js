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
import { Loading } from 'assets';
export class CoinsTable extends Component {
  state = {
    isLoading: true,
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
        per_page: this.state.resultsPerPage,
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
    window.addEventListener('scroll', this.handleScrollBottom);
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.currency !== this.props.currency) {
      this.getCoinItemData(this.props.currency);
    }
  };
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScrollBottom);
  }

  handleScrollBottom = () => {
    const isBottom =
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.documentElement.scrollHeight;

    if (isBottom && this.state.resultsPerPage < 250) {
      this.setState((prevState) => ({
        resultsPerPage: prevState.resultsPerPage + 10
      }));

      this.getCoinItemData();
    }
  };
  render() {
    return (
      <>
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
        {this.state.isLoading && this.state.resultsPerPage > 10 && (
          <Loading type="spin" height={50} width={30} />
        )}
      </>
    );
  }
}
