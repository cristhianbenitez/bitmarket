import React from 'react';
import { useAppSelector } from 'store/hooks';

import { Modal, AssetsListRow } from 'components';
import {
  Container,
  PageHead,
  Subtitle,
  Button,
  AssetsList
} from './Portfolio.styles';

export const Portfolio = () => {
  const { assets, isLoading } = useAppSelector((state) => state.assetsList);
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
        {!isLoading &&
          assets.length > 0 &&
          assets.map((asset: any) => {
            return <AssetsListRow key={asset.uniqueId} asset={asset} />;
          })}
      </AssetsList>
    </Container>
  );
};
