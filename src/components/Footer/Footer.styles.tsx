import styled from 'styled-components';
import { devices } from 'utils';

export const Container = styled.div`
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 30%;
  max-width: 1920px;
  margin-bottom: 5em;
  @media ${devices.tablet} {
    margin-bottom: 0;
    width: 20%;
  }
`;

export const IconContainer = styled.div`
  width: 30px;
  cursor: pointer;
  @media ${devices.tablet} {
    width: 40px;
  }
`;

export const Link = styled.a`
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
