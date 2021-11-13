import styled from 'styled-components';
import ThemeIcon from './Assets/ThemeIcon.svg';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  text-align: center;
`;
export const Navbar = styled.nav`
  padding: 0.5em 1.5em;
  display: flex;
  justify-content: space-between;
  background-color: #191b1f;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
`;

export const StyledButton = styled(Link)`
  font-size: 1.35rem;
  line-height: 30px;
  padding: 0.5em 2em;
  margin-right: 0.5em;
  border-radius: 6px;
  text-decoration: none;
  color: #fff;
  &:hover,
  &:focus {
    background: #2c2f36;
  }
`;

export const ThemeButton = styled.img.attrs({
  src: `${ThemeIcon}`
})`
  cursor: pointer;
  margin: 0;
  background: #2c2f36;
  padding: 0.5em 1em;
  border-radius: 6px;
`;
