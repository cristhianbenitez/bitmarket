import styled from 'styled-components';

export const Description = styled.p`
  margin-top: 3em;
  & a {
    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
      text-decoration: none;
      color: ${({ theme }) => theme.green};
    }
  }
`;

export const DescriptionInfoContainer = styled.div`
  background: ${({ theme }) => theme.foreground};
  border-radius: 12px;
  color: ${({ theme }) => theme.general};
  padding: 1em 2em;
`;
