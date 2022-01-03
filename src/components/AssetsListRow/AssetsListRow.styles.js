import styled from 'styled-components';
import ArrowUp from 'assets/ArrowUp.png';
import RedArrow from 'assets/RedArrow.png';

export const RowContainer = styled.div`
  display: flex;
  margin-top: 1.5em;
  width: 100%;
`;

export const LeftContent = styled.div`
  background: ${({ theme }) => theme.foreground};
  border-radius: 6px;
  padding: 3em;
  margin-right: 1em;
`;

export const RightContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Image = styled.img`
  object-fit: cover;
  width: 60%;
`;

export const CoinName = styled.h2`
  font-weight: 400;
  font-size: 1rem;
  margin-top: 0.5em;
`;

export const CoinSymbol = styled.span`
  font-weight: 400;
  font-size: 1rem;
  text-transform: uppercase;
`;

export const ImageContainer = styled.div`
  background: ${({ theme }) => theme.background};
  padding: 1em;
  border-radius: 12px;
`;
export const TopContent = styled.div`
  text-align: start;
`;

export const BottomContent = styled.div`
  text-align: start;
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background: ${({ theme }) => theme.foreground};
  padding: 1.8em 1.4em;
  margin-top: 0.5em;
`;

export const SmallText = styled.p`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  margin-right: 0.5em;
`;

export const GreenText = styled.span`
  color: ${(props) => (props.price < 0 ? '#FE1040' : '#00fc2a')};
  margin-left: 1em;
  display: flex;
  align-items: center;
`;
export const Text = styled.div`
  color: ${({ theme }) => theme.general};
  margin-left: 1em;
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  margin-right: 0.5em;
`;

export const PercentageBar = styled.div`
  width: 45px;
  height: 9px;
  background: #ffffff;
  border-radius: 12px;
  margin-left: 0.5em;
`;

export const FillPercentage = styled.div`
  background: #00fc2a;
  border-radius: 12px;
  height: 100%;
  width: ${(props) => `${props.percentage}%`};
`;

export const DeleteButton = styled.span`
  color: #fe1040;
  cursor: pointer;
`;

export const RedArrowDown = styled.img.attrs({
  src: `${RedArrow}`
})`
  margin-right: 0.2em;
`;

export const GreenArrowUp = styled.img.attrs({
  src: `${ArrowUp}`
})`
  margin-right: 0.2em;
`;

