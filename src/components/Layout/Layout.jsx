import { Outlet } from 'react-router-dom';
import {
  Container,
  Header,
  Logo,
  Navigation,
  StyledLink,
} from './Layout.styled';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Suspense } from 'react';

import { ReactComponent as LogoIcon } from '../../icons/movie-search.svg';

const Layout = () => {
  return (
    <>
      <Header>
        <Logo>
          <LogoIcon width={48} height={48} />
          <b>Movies Search Site</b>
        </Logo>
        <Navigation>
          <StyledLink to="/" end>
            Home
          </StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </Navigation>
      </Header>
      <main>
        <Container>
          <Suspense>
            <Outlet />
          </Suspense>
        </Container>
      </main>
      <ToastContainer autoClose={3000} theme="colored" />
    </>
  );
};

export default Layout;
