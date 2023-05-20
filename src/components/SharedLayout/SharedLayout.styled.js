import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  z-index: 1100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;

  box-shadow: 0 5px 4px -4px rgba(0, 0, 0, 0.3),
    0px 1px 1px -4px rgba(0, 0, 0, 0.14);

  > nav {
    display: flex;
  }
`;
//  border-bottom: 1px solid black;
// box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
//     0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);

export const Logo = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  font-weight: 700;
  margin: 0;
`;

export const LogoName = styled.span`
  text-transform: uppercase;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: #336fb3df;
  }
`;

// border-bottom: 1px solid black;
