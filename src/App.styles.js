import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const Wrapper = styled.div`
  margin: 0 auto;
  text-align: center;
`;

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding:0;
}
body {
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.general};

}
a {
  text-decoration: none;
}
`;
