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
      color: #06d554;
    }
  }
`;
export const DescriptionInfoContainer = styled.div`
  background: #191b1f;
  border-radius: 12px;
  background: #191b1f;
  padding: 1em 2em;
`;
