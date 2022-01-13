import React, { useState, useEffect, useRef } from 'react';

import coinGecko from 'api/coinGecko';
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
import { useCurrency } from 'hooks';

export const CoinsTable = (props) => {
  const [loading, setLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);
  const [coinItemData, setCoinItemData] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const { value } = useCurrency();
  const observer = useRef(null);

  const getCoinItemData = async () => {
    setLoading(true);
    try {
      const { data } = await coinGecko.get('/coins/markets', {
        params: {
          vs_currency: value,
          days: '1',
          order: 'market_cap_desc',
          per_page: '10',
          page: pageNumber,
          interval: 'hourly',
          sparkline: true,
          price_change_percentage: '1h,24h,7d'
        }
      });
      setCoinItemData((prevData) => [...prevData, ...data]);
      setHasMore(data.length > 0);
    } catch (e) {
      if (coinGecko.isCancel(e)) return;
    }
  };

  useEffect(() => {
    let isMounted = true;
    getCoinItemData().then(() => {
      if (isMounted) {
        setLoading(false);
      }
    });
    return () => {
      isMounted = false;
    };
  }, [pageNumber]);
  const lastListElementRef = (node) => {
    if (loading) return;
    if (observer.current) {
      observer.current.disconnect();
    }
    observer.current = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && hasMore) {
        setPageNumber((prevPageNum) => prevPageNum + 1);
      }
    });
    if (node) observer.current.observe(node);
  };

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
          {coinItemData.map((coinData, index) => (
            <CoinsTableRow
              key={index}
              index={index}
              coinData={coinData}
              lastListElementRef={lastListElementRef}
              value={value}
            />
          ))}
        </TableBody>
        <TableBody
          ref={(node) => {
            lastListElementRef(node);
          }}
        />
      </Table>
      {loading && <Loading type="spin" height={50} width={30} />}
    </ScrollableDiv>
  );
};
