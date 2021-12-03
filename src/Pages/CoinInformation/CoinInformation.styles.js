import styled from 'styled-components';
import BackgroundImage from '../../Assets/BackgroundImage.png';

const StyledDiv = styled.div`
  // General Div
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  background: #191b1f;
`;

export const Container = styled.div`
  width: 75%;
  max-width: 1920px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;
export const CoinLinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5em;
`;
export const LeftLink = styled.div`
  width: 32.5%;
`;
export const MiddleLink = styled.div`
  width: 32.5%;
`;
export const RightLink = styled.div`
  width: 32.5%;
`;

export const TopPageContent = styled.div`
  margin-top: 2em;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
export const BottomPageContent = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  margin-top: 2em;
  width: 100%;
`;

export const LeftContent = styled(StyledDiv)`
  justify-content: space-between;
  background: unset;
  width: 20%;
`;
export const MiddleContent = styled(StyledDiv)`
  width: 30%;
`;
export const RightContent = styled(StyledDiv)`
  width: 40%;
`;

export const Subtitle = styled.h3`
  font-weight: 400;
  font-size: 1rem;
  text-align: start;
  margin-top: 3em;
`;

export const Background = styled.img.attrs({
  src: `${BackgroundImage}`
})`
  margin-top: 5em;
  width: 100%;
`;
