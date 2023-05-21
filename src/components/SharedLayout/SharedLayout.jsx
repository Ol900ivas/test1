import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from '../Loader/Loader';
import logo_test from '../../images/logo_test.png';

import {
  Container,
  Header,
  Logo,
  LogoName,
  LinkNav,
  LogoImg,
  LinkLogo,
  Nav,
} from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <LinkLogo to="/">
          <Logo>
            <LogoImg src={logo_test} alt="Logo" size={20} />
            <LogoName>TweetNet</LogoName>
          </Logo>
        </LinkLogo>
        <Nav>
          <LinkNav to="/">Home</LinkNav>
          <LinkNav to="/tweets">Tweets</LinkNav>
        </Nav>
      </Header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};

export default SharedLayout;
