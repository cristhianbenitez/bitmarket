import React, { useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CoinsTableRow } from 'components';
import {
  ScrollableDiv,
  Table,
  TableBody,
  TableHead,
  TableHeading,
  TableRowHead
} from './CoinsTable.styles';
import { Loading } from 'assets';

import {
  getListOfCoins,
  incrementPage
} from 'store/reducers/coinsList/coinsListSlice';

export const CoinsTable = () => {
  const currency = useSelector((state) => state.currency);
  const observer = useRef(null);
  const { listOfCoins, loading, pageNumber, hasMore } = useSelector(
    (state) => state.coinsList
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListOfCoins({ currency, pageNumber }));
  }, [currency, pageNumber]);

  const lastListElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) {
        observer.current.disconnect();
      }
      observer.current = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && hasMore) {
            dispatch(incrementPage());
          }
        },
        { threshold: 1 }
      );
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );
  return (
    <ScrollableDiv>
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
          {listOfCoins.map((coinData, index) => (
            <CoinsTableRow
              key={index}
              index={index}
              coinData={coinData}
              value={currency}
            />
          ))}
        </TableBody>
        <TableBody ref={lastListElementRef} />
      </Table>
      {loading && <Loading type="spin" height={50} width={30} />}
    </ScrollableDiv>
  );
};
