import React, { useState, useEffect } from 'react';

import { Modal, AssetsListRow } from 'components';
import {
  Container,
  PageHead,
  Subtitle,
  Button,
  AssetsList
} from './Portfolio.styles';
import coinGecko from 'api/coinGecko';
import { v4 as uuid } from 'uuid';
import { useCurrency } from 'hooks';
export const Portfolio = (props) => {
  const [error, setError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [assets, setAssets] = useState([]);
  const { value } = useCurrency();

  const addAsset = async (asset) => {
    try {
      const { coinID, purchasedAmount, date } = asset;
      const purchasedDate = date.split('-').reverse().join('-');
      const { data } = await coinGecko.get(`/coins/${coinID}/history`, {
        params: {
          date: purchasedDate,
          localization: 'false'
        }
      });
      const uniqueId = uuid().slice(0, 8);
      const historicPriceData = data.market_data.current_price.usd;
      const { image, name, symbol, id } = data;
      const assetData = {
        uniqueId,
        name,
        symbol,
        id,
        image: image.small,
        purchasedDate,
        purchasedAmount,
        historicPriceData
      };
      setAssets((prevAssets) => [...prevAssets, assetData]);
      localStorage.setItem('assets', JSON.stringify(assets));
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    if (localStorage.assets && assets) {
      const storedAssets = JSON.parse(localStorage.getItem('assets'));
      setAssets(storedAssets);
    }
  }, []);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const removeAsset = (coinID) => {
    const filteredAssets = Object.assign(assets).filter(
      (asset) => asset.uniqueId !== coinID
    );
    setAssets(filteredAssets);
    localStorage.setItem('assets', JSON.stringify(filteredAssets));
  };

  return (
    <Container>
      <PageHead>
        <Button onClick={toggleModal}>Add Asset</Button>
        {isModalOpen && (
          <Modal
            toggleModal={toggleModal}
            addAsset={addAsset}
            isOpen={isModalOpen}
            setIsOpen={setIsModalOpen}
          />
        )}
      </PageHead>
      <Subtitle>Your statistics</Subtitle>
      <AssetsList>
        {!error &&
          assets.length > 0 &&
          assets.map((asset) => {
            return (
              <AssetsListRow
                key={asset.uniqueId}
                asset={asset}
                currency={value}
                removeAsset={removeAsset}
              />
            );
          })}
      </AssetsList>
    </Container>
  );
};
