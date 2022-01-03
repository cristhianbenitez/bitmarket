import styled from 'styled-components';
import NumberFormat from 'react-number-format';

export const ModalButton = styled.button.attrs({
  type: 'button'
})`
  padding: 1.5em 13em;
  background: ${({ theme }) => theme.green};
  color: ${({ theme }) => theme.general};
  box-shadow: none;
  border: none;
  border-radius: 12px;
`;

export const ModalOverlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalContainer = styled.div`
  overflow: auto;
  background: ${({ theme }) => theme.background};
  border-radius: 12px;
  display: flex;
  justify-content: center;
  padding: 1em 0 2em 3em;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-right: 3em;
`;

export const ModalHeader = styled.div`
  text-align: center;
`;

export const ModalBody = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2em 0 2em 1em;
`;

export const ModalTitle = styled.p`
  font-size: 1.25rem;
  font-weight: 400;
`;

export const CloseButton = styled.span`
  color: ${({ theme }) => theme.green};
  font-size: 3.5em;
  font-weight: bold;
  padding: 0;
  margin: 0;
  margin-top: -0.5em;
  &:hover,
  &:focus {
    color: #ffffff;
    text-decoration: none;
    cursor: pointer;
  }
`;

export const LeftContent = styled.div`
  background: ${({ theme }) => theme.foreground};
  border-radius: 6px;
  padding: 1.5em 1.5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 2em;
`;
export const RightContent = styled.div`
  padding-right: 1em;
  width: 500px;
`;

export const CoinImage = styled.img`
  object-fit: cover;
  width: 100%;
`;

export const CoinNameText = styled.h2`
  margin-top: 0.25em;
  font-weight: 400;
  font-size: 1rem;
  color: ${({ theme }) => theme.general};
`;

export const CoinImageContainer = styled.div`
  background: ${({ theme }) => theme.background};
  padding: 1em;
  border-radius: 12px;
  margin-bottom: 0;
`;

export const StyledInput = styled.input`
  background: ${({ theme }) => theme.foreground};
  width: 100%;
  padding: 1.5em 1em;
  border: none;
  color: ${({ theme }) => theme.general};
  box-sizing: border-box;
  border-radius: 12px;
  &:focus {
    outline: ${({ theme }) => theme.green} solid 2px;
  }
  &[type='date']::-webkit-calendar-picker-indicator {
    cursor: pointer;
    border-radius: 4px;
    margin-right: 2px;
    opacity: 0.6;
    filter: invert(0.8);
    &:hover {
      opacity: 1;
    }
  }
`;

export const StyledCurrency = styled(NumberFormat)`
  background: ${({ theme }) => theme.foreground};
  color: ${({ theme }) => theme.general};
  border-radius: 12px;
  margin-bottom: 1em;
`;

export const ModalButtons = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledButton = styled.button`
  border: none;
  box-shadow: none;
  margin: 0 auto;
  padding: 1.125em 2em;
  border-radius: 8px;
  color: ${({ theme }) => theme.general};
  &:hover {
    cursor: pointer;
  }
  &:first-child {
    width: 80%;
    margin-left: 4em;
    margin-right: 2em;
    color: ${({ theme }) => theme.general};
    background: ${({ theme }) => theme.foreground};
    &:hover,
    &:focus {
      color: ${({ theme }) => theme.general};
      background: ${({ theme }) => theme.green};
    }
  }
  &:nth-child(2) {
    width: 80%;
    margin-right: 4em;
    background: ${({ theme }) => theme.green};
    &:hover,
    &:focus {
      color: ${({ theme }) => theme.general};
      background-color: ${({ theme }) => theme.foreground};
    }
  }
`;
