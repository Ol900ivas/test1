import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Loader from "../Loader/Loader";
import { BiCameraMovie } from "react-icons/bi";

import { Container, Header, Logo, LogoName, Link } from "./SharedLayout.styled";

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Logo>
          <BiCameraMovie size="40px" />
          <LogoName>Our site</LogoName>
        </Logo>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/tweets">Tweets</Link>
        </nav>
      </Header>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;
