import { LinkContainer } from 'components';

import {
  BottomContent,
  CoinImage,
  CoinImageContainer,
  CoinInfoContainer,
  CoinNameText,
  TopContent
} from './CoinInfo.styles';

export const CoinInfo = (props) => {
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
        <LinkContainer urlLink={props.coinLink} />
      </BottomContent>
    </CoinInfoContainer>
  );
};
