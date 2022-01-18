import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Modal, AssetsListRow } from 'components';
import {
  Container,
  PageHead,
  Subtitle,
  Button,
  AssetsList
} from './Portfolio.styles';
import {
  getAssetData,
  handleRemove
} from 'store/reducers/assetsList/assetsListSlice';

export const Portfolio = () => {
  const { assets, loading } = useSelector((state) => state.assetsList);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const addAsset = (asset) => dispatch(getAssetData(asset));

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const removeAsset = (coinID) => dispatch(handleRemove(coinID));

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
          assets.map((asset) => {
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
