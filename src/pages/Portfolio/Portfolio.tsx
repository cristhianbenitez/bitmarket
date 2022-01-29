import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import {
  getAssetData,
  handleRemove
} from 'store/reducers/assetsList/assetsListSlice';

import { Modal, AssetsListRow } from 'components';
import {
  Container,
  PageHead,
  Subtitle,
  Button,
  AssetsList
} from './Portfolio.styles';

export const Portfolio = () => {
  const { assets, loading } = useAppSelector((state) => state.assetsList);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const addAsset = (asset: {
    coinID: string;
    purchasedAmount: number;
    date: string;
  }) => dispatch(getAssetData(asset));

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const removeAsset = (coinID: string) => dispatch(handleRemove(coinID));

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
        {!loading &&
          assets.length > 0 &&
          assets.map((asset: any) => {
            return (
              <AssetsListRow
                key={asset.uniqueId}
                asset={asset}
                removeAsset={removeAsset}
              />
            );
          })}
      </AssetsList>
    </Container>
  );
};
