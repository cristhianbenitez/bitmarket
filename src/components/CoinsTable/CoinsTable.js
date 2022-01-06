import React, { Component, createRef } from 'react';

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
    pageNumber: 1,
    coinItemData: [],
    hasMore: false
  };

  getCoinItemData = async (currency = 'usd') => {
    this.setState({ isLoading: true });
    try {
      const { data } = await coinGecko.get('/coins/markets', {
        params: {
          vs_currency: currency,
          days: '1',
          order: 'market_cap_desc',
          per_page: '10',
          page: this.state.pageNumber,
          interval: 'hourly',
          sparkline: true,
          price_change_percentage: '1h,24h,7d'
        }
      });
      this.setState((prevState) => ({
        isLoading: false,
        coinItemData: [...prevState.coinItemData, ...data],
        hasMore: data.length > 0
      }));
    } catch (e) {
      if (axios.isCancel(e)) return;
    }
  };

  componentDidMount = () => {
    this.getCoinItemData();
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.currency !== this.props.currency) {
      this.getCoinItemData(this.props.currency);
    }
  };

  lastListElementRef = (node, observer) => {
    if (this.state.isLoading) return;
    if (observer.current) {
      observer.current.disconnect();
    }
    observer.current = new IntersectionObserver((entries) => {
      const hasIntersectedWithRoot = entries[0].isIntersecting;
      if (hasIntersectedWithRoot && this.state.hasMore) {
        this.setState((prevState) => prevState.pageNumber + 1);
        this.getCoinItemData();
      }
    });
    if (node) observer.current.observe(node);
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
              lastListElementRef={this.lastListElementRef}
            />
          </TableBody>
        </Table>
        {this.state.isLoading && <Loading type="spin" height={50} width={30} />}
      </>
    );
  }
}
