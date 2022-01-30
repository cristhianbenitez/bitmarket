import { LinkContainer } from 'components';

import {
  BottomContent,
  CoinImage,
  CoinImageContainer,
  CoinInfoContainer,
  CoinNameText,
  TopContent
} from './CoinInfo.styles';

interface CoinInfoProps {
  coinImg: string;
  coinName: string;
  coinSymbol: string;
  coinLink: string;
}

export const CoinInfo = (props: CoinInfoProps) => {
  return (
    <CoinInfoContainer>
      <TopContent>
        <CoinImageContainer>
          <CoinImage src={props.coinImg} alt={props.coinName} />
        </CoinImageContainer>
        <CoinNameText>
          {props.coinName}({props.coinSymbol})
        </CoinNameText>
      </TopContent>
      <BottomContent>
        <LinkContainer urlLink={props.coinLink} extraIcon={false} />
      </BottomContent>
    </CoinInfoContainer>
  );
};
