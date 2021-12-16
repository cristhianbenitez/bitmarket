import styled from 'styled-components';
import { Autocomplete, Paper, TextField } from '@mui/material';
import NumberFormat from 'react-number-format';

export const ModalButton = styled.button.attrs({
  type: 'button'
})`
  padding: 1.5em 13em;
  background: #06d554;
  color: #ffff;
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
  background-color: #2c2f36;
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
  color: #06d554;
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
  background: #191b1f;
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
`;

export const CoinImage = styled.img`
  object-fit: cover;
  width: 100%;
`;

export const CoinNameText = styled.h2`
  margin-top: 0.25em;
  font-weight: 400;
  font-size: 1rem;
`;

export const CoinImageContainer = styled.div`
  background: #1f2128;
  padding: 1em;
  border-radius: 12px;
  margin-bottom: 0;
`;

export const StyledDropdown = styled(Autocomplete)`
  && {
    color: #ffff;
    width: 360px;
    margin-bottom: 1em;
    max-width: 100%;
    background-color: #191b1f;
    border-radius: 12px;

    &:last-child {
      margin-bottom: 0;
    }
    input,
    label,
    .MuiAutocomplete-clearIndicator {
      color: #ffff;
    }
    .MuiAutocomplete {
      &-popupIndicator {
        color: #00ff5f;
      }
    }
  }
`;

export const StyledPaper = styled(Paper)`
  && {
    background: #191b1f;
    color: #fff;
  }
`;

export const StyledListbox = styled.ul`
  && {
    li.Mui-focused {
      background: #2c2f36;
    }
    &::-webkit-scrollbar {
      width: 6px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #2c2f36;
      outline: 1px solid #2c2f36;
      border-radius: 4px;
    }
  }
`;

export const StyledCurrency = styled(NumberFormat)`
  && {
    background: #191b1f;
    color: #fff;
    border-radius: 12px;
    width: 100%;
    label,
    input,
    p {
      color: #fff;
    }
  }
`;

export const StyledDate = styled(TextField)`
  && {
    background: #191b1f;
    color: #fff;
    outline: none;
    border: none;
    width: 100%;
    margin-top: 1em;
    border-radius: 12px;
    input,
    label,
    p {
      color: #fff;
    }
    input::-webkit-calendar-picker-indicator {
      cursor: pointer;
      border-radius: 4px;
      margin-right: 2px;
      opacity: 0.6;
      filter: invert(0.8);
      &:hover {
        opacity: 1;
      }
    }
  }
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
  color: #fff;
  &:hover {
    cursor: pointer;
  }
  &:first-child {
    width: 80%;
    margin-left: 4em;
    margin-right: 2em;
    color: #06d554;
    &:hover,
    &:focus {
      color: #fff;
      background-color: #06d554;
    }
  }
  &:nth-child(2) {
    width: 80%;
    margin-right: 4em;
    background-color: #06d554;
    &:hover,
    &:focus {
      color: #06d554;
      background-color: #fff;
    }
  }
`;
