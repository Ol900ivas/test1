import styled from '@emotion/styled';

export const Card = styled.div`
  // position: relative;
  height: 460px;
  width: 380px;
  // justify-content: center;
  border: none;
  border-radius: 20px;
  background: var(--card-bg);
  box-shadow: var(--card-shadow);
`;

export const ImgWrap = styled.div`
  height: 218px;
  position: relative;
  top: 0;
  ::after {
    content: '';
    width: 100%;
    height: 8px;
    position: absolute;
    bottom: 28px;
    left: 0;
    background: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
  }
`;

export const Logo = styled.img`
  position: absolute;
  top: -10px;
  left: 20px;
`;

export const Picture = styled.img`
  margin: 28px 36px 16px;
`;

export const AvatarWrap = styled.div`
  position: absolute;
  bottom: 28px;
  left: 50%;
  transform: translate(-50%, 50%);
  z-index: 5;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  border-radius: 50%;
`;

export const Avatar = styled.img`
  width: 62px;
  height: 62px;
  border-radius: 50%;
`;

export const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 36px 16px 36px;
  align-items: center;
`;

export const InfoTweets = styled.p`
  color: var(--light-text-color);
  text-transform: uppercase;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  margin-bottom: 16px;
`;

export const InfoFollowers = styled.p`
  color: var(--light-text-color);
  text-transform: uppercase;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  margin-bottom: 26px;
`;

export const Button = styled.button`
  padding-top: 14px;
  padding-bottom: 14px;
  width: 196px;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  font-family: Montserrat;
  font-weight: 600;
  font-size: 18px;
  line-height: 1, 2;
  color: var(--dark-text-color);
  text-transform: uppercase;
  box-shadow: var(--btn-shadow);
  transition: transform 300ms ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;
