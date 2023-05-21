import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from '../Loader/Loader';
import logo from '../../images/logo.svg';

import {
  Container,
  Header,
  Logo,
  LogoName,
  LinkNav,
  LogoImg,
  LinkLogo,
} from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <LinkLogo to="/">
          <Logo>
            <LogoImg src={logo} alt="Logo" size={20} />
            <LogoName>TweetNet</LogoName>
          </Logo>
        </LinkLogo>
        <nav>
          <LinkNav to="/">Home</LinkNav>
          <LinkNav to="/tweets">Tweets</LinkNav>
        </nav>
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
