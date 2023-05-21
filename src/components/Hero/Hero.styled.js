import styled from '@emotion/styled';
import hero from '../../images/hero.jpg';
import { Link } from 'react-router-dom';

export const HeroWrap = styled.div`
  max-width: 1200px;
  //   height: 700px;
  background: url(${hero}), var(--card-bg);
  padding-bottom: 600px;
  padding-top: 100px;
  display: flex;
  border-radius: 20px;
  //   align-items: center;
  justify-content: center;
  box-shadow: var(--card-shadow);
`;

export const HeroLink = styled(Link)`
  text-decoration: none;
  font-weight: 700;
  font-size: 40px;
  line-height: 1.3;
  color: var(--light-text-color);
  transition: filter 300ms ease-in-out;
  &:hover {
    filter: drop-shadow(0px 4px 10px rgba(255, 255, 255, 0.1))
      drop-shadow(0px 4px 20px rgba(255, 255, 255, 0.4));
  }
`;
