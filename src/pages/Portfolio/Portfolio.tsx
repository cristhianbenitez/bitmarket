import React from 'react';
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

interface AssetProps {
  historicPriceData: number;
  id: string;
  image: string;
  name: string;
  purchasedAmount: string;
  purchasedDate: string;
  symbol: string;
  uniqueId: string;
}
[];

export const Portfolio = () => {
  const { assets, loading } = useAppSelector((state) => state.assetsList);
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
  const toggleModal = () => setIsModalOpen(true);

  return (
    <Container>
      <PageHead>
        <Button onClick={toggleModal}>Add Asset</Button>
        {isModalOpen && (
          <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
        )}
      </PageHead>
      <Subtitle>Your statistics</Subtitle>
      <AssetsList>
        {!loading &&
          assets.length > 0 &&
          assets.map((asset: any) => {
            return <AssetsListRow key={asset.uniqueId} asset={asset} />;
          })}
      </AssetsList>
    </Container>
  );
};
