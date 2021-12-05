import ThemeIcon from 'Assets/ThemeIcon.svg';
import styled from 'styled-components';

export const Wrapper = styled.nav`
  padding: 1em 4em;
  display: flex;
  justify-content: space-between;
  background-color: #191b1f;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledButton = styled.div`
  font-size: 1.35rem;
  line-height: 30px;
  padding: 0.4em 2em;
  margin-right: 0.5em;
  border-radius: 6px;
  text-decoration: none;
  color: #fff;
  background: ${(props) => props.currentPage && '#2c2f36'};
`;
export const CoinsButton = styled.div``;
export const PortfolioButton = styled.div``;
export const ThemeButton = styled.img.attrs({
  src: `${ThemeIcon}`
})`
  cursor: pointer;
  margin: 0;
  background: #2c2f36;
  padding: 0.5em 1em;
  border-radius: 6px;
`;
