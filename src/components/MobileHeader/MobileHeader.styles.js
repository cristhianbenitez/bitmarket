import styled from 'styled-components';
import { devices } from 'utils';

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.25em 1.5em;
  text-transform: capitalize;

  @media ${devices.tablet} {
    display: none;
  }
`;
export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 400;
  text-align: start;
`;
