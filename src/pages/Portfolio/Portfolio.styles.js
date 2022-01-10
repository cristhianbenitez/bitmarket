import styled from 'styled-components';
import { devices } from 'utils';

export const Container = styled.div`
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  margin-bottom: 5em;
  padding: 0 1em;
  @media ${devices.tablet} {
    padding: 1em 2em;
  }
  @media ${devices.desktop} {
    padding: 1em 5em;
  }
`;

export const Subtitle = styled.h3`
  font-weight: 400;
  font-size: 1rem;
  text-align: start;
  margin-top: 2em;
`;

export const Button = styled.button.attrs({
  type: 'button'
})`
  background: #06d554;
  color: ${({ theme }) => theme.general};
  box-shadow: none;
  border: none;
  border-radius: 12px;
  padding: 1.5em 0;
  width: 95%;
  max-width: 380px;
`;

export const PageHead = styled.div`
  margin-top: 3em;
`;

export const AssetsList = styled.div`
  width: 100%;
`;
