import styled from 'styled-components';
import { devices } from 'utils';

export const Description = styled.p`
  & a {
    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
      text-decoration: none;
      color: #06d554;
    }
  }
  margin-bottom: 0.2em;
`;

export const DescriptionInfoContainer = styled.div`
  font-size: 0.8rem;
  padding: 3em 2em;
  background: #2c2d33;
  border-radius: 12px;
  margin-bottom: 1em;
  @media ${devices.tablet} {
    background: ${({ theme }) => theme.foreground};
  }
  @media ${devices.laptop} {
    border-radius: 12px;
    color: ${({ theme }) => theme.general};
    font-size: 1rem;
  }
`;

export const ReadMore = styled.span`
  color: #06d554;
  cursor: pointer;
`;
