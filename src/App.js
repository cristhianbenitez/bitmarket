import { Home, Portfolio } from './Pages';
import {
  Wrapper,
  Container,
  NavContainer,
  StyledButton,
  ThemeButton
} from './App.styles';
import { Dropdown, SearchInput } from './Components';
import Coins from './Coins';
function App() {
  return (
    <Wrapper>
      <NavContainer>
        <Container>
          <StyledButton>Coins</StyledButton>
          <StyledButton>Portfolio</StyledButton>
        </Container>
        <Container>
          <SearchInput />
          <Dropdown title={Coins[0].value} items={Coins} />
          <ThemeButton />
        </Container>
      </NavContainer>
      <Home />
      <Portfolio />
    </Wrapper>
  );
}

export default App;
