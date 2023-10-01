import { Outlet } from 'react-router-dom';
import { Container, Header, Navigation, StyledLink } from './Layout.styled';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Suspense } from 'react';

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
