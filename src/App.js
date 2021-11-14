import { Home, Portfolio } from './Pages';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {
  Wrapper,
  Container,
  Navbar,
  StyledButton,
  ThemeButton
} from './App.styles';
import { Dropdown, SearchInput } from './Components';
import Coins from './Coins';
function App() {
  return (
    <Wrapper>
      <Router>
        <Navbar>
          <Container>
            <StyledButton to="/">Coins</StyledButton>
            <StyledButton to="/portfolio">Portfolio</StyledButton>
          </Container>
          <Container>
            <SearchInput />
            <Dropdown title={Coins[0].value} items={Coins} />
            <ThemeButton />
          </Container>
        </Navbar>
        <Routes>
          <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Router>
    </Wrapper>
  );
}

export default App;
