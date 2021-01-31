import styled, { keyframes } from 'styled-components/macro';
import logo from 'ui/images/logo.svg';

export const App = () => (
  <StyledApp>
    <Header>
      <Logo src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/ui/components/app/app.tsx</code> and save to reload.
      </p>
      <Link
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </Link>
    </Header>
  </StyledApp>
);

const StyledApp = styled.div`
  text-align: center;
`;

const Header = styled.header`
  align-items: center;
  background-color: #282c34;
  color: white;
  display: flex;
  flex-direction: column;
  font-size: calc(10px + 2vmin);
  justify-content: center;
  min-height: 100vh;
`;

const logoAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Logo = styled.img`
  @media (prefers-reduced-motion: no-preference) {
    animation: ${logoAnimation} infinite 20s linear;
  }
  height: 40vmin;
  pointer-events: none;
`;

const Link = styled.a`
  color: #61dafb;
`;
