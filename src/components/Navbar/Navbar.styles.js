import styled, { css } from 'styled-components';
import { ReactComponent as ThemeIcon } from 'assets/Icons/ThemeIcon.svg';
import { Link } from 'react-router-dom';
import { ReactComponent as Summary } from 'assets/Icons/Summary.svg';
import { ReactComponent as Coins } from 'assets/Icons/Coins.svg';
import { ReactComponent as Portfolio } from 'assets/Icons/Portfolio.svg';
import { devices } from 'utils';

export const Wrapper = styled.nav`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1920px;
  @media ${devices.tablet} {
    justify-content: space-between;
  }
`;

export const Container = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-around;
  align-items: center;
  @media ${devices.tablet} {
    width: unset;
    justify-content: center;
  }
`;

export const StyledButton = styled(({ currentPage, ...rest }) => (
  <Link {...rest} />
))`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 0.7rem;
  text-decoration: none;
  background: transparent;
  color: ${({ currentPage, theme }) =>
    currentPage ? '#00FF5F' : theme.general};
  fill: ${({ currentPage, theme }) =>
    currentPage ? '#00FF5F' : theme.general};

  @media ${devices.tablet} {
    cursor: pointer;
    line-height: 30px;
    color: ${({ theme }) => theme.general};
    font-size: 1rem;
    background: ${({ currentPage, theme }) => currentPage && theme.background};
    flex-direction: row;
    padding: 0.5em 2em;
    border-radius: 6px;
  }

  @media ${devices.desktop} {
    font-size: 1.3rem;
  }
`;

const IconStyle = css`
  margin-bottom: 0.5em;
  max-width: 100%;

  @media ${devices.tablet} {
    display: none;
  }
`;

export const PortfolioIcon = styled(Portfolio)`
  ${IconStyle}
  #portfolio-icon {
    fill: inherit;
  }
`;

export const CoinsIcon = styled(Coins)`
  ${IconStyle}
  #coins-icon {
    fill: inherit;
  }
`;

export const SummaryButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 0.7rem;
  color: ${({ currentPage, theme }) =>
    currentPage ? '#00FF5F' : theme.general};
  fill: ${({ currentPage, theme }) =>
    currentPage ? '#00FF5F' : theme.general};

  @media ${devices.tablet} {
    display: none;
  }
`;

export const SummaryIcon = styled(Summary)`
  ${IconStyle}
  #summary-icon {
    fill: inherit;
  }
`;

export const ThemeButton = styled(ThemeIcon)`
  display: none;
  @media ${devices.tablet} {
    display: block;
    cursor: pointer;
    margin: 0;
    background: ${({ theme }) => theme.background};
    padding: 0.7em;
    width: 20px;
    height: 100%;
    border-radius: 6px;
    box-sizing: content-box;
    #scan-icon {
      #left {
        fill: ${({ theme }) => theme.general};
      }
      #right {
        fill: #707070;
      }
    }
  }
`;
