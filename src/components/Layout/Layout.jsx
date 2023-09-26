import { Outlet } from 'react-router-dom';
import { Container, Header, Navigation, StyledLink } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Header>
        <Navigation>
          <StyledLink to="/" end>
            Home
          </StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </Navigation>
      </Header>
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
    </>
  );
};

export default Layout;
