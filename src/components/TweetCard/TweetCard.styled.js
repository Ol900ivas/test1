import styled from '@emotion/styled';

export const Card = styled.div`
  position: relative;
  height: 460px;
  width: 380px;
  justify-content: center;
  border: none;
  border-radius: 20px;
  background: var(--card-bg);
  box-shadow: var(--card-shadow);
`;

export const Button = styled.button`
  padding-top: 14px;
  padding-bottom: 14px;
  width: 196px;
  border: none;
  cursor: pointer;
  border-radius: 10px;
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

export const ImgWrap = styled.div`
  height: 218px;
  position: relative;
  ::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: 8px;
    background: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
  }
`;

export const AvatarWrap = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
  z-index: 2;
  width: 80px;
  height: 80px;
  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Avatar = styled.img`
  width: 62px;
  height: 62px;
  border-radius: 50%;
`;

export const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 62px 16px 36px;
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

// display: flex;
//   justify-content: center;
//   border: none;
//
//
//   align-items: center;

// .userCard {
//   width: 380px;
//   height: 460px;
//   background: linear-gradient(
//     114.99deg,
//     #471ca9 -0.99%,
//     #5736a3 54.28%,
//     #4b2a99 78.99%
//   );
//   box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
//   border-radius: 20px;
//   transition: filter 400ms linear;
// }

// .userCard:hover .picture {
//   filter: drop-shadow(0 0 20px #646cffaa);
//   animation: rotate infinite 1s linear;
// }
export const Logo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
`;
export const Picture = styled.img`
  margin: 28px 36px 16px;
`;

// .userAvatarContainer {
//   position: absolute;
//   bottom: 0;
//   left: 50%;
//   transform: translate(-50%, 50%);
//   z-index: 2;
//   width: 80px;
//   height: 80px;
//   background: #ebd8ff;
//   box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
//     inset 0px -2.19582px 4.39163px #ae7be3,
//     inset 0px 4.39163px 3.29372px #fbf8ff;
//   border-radius: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// }

// .userAvatar {
//
// }

// .userInfo {
//
// }

// .userTweets {
//   font-weight: 500;
//   font-size: 20px;
//   line-height: 1.2;
//   text-transform: uppercase;
//   color: #ebd8ff;
//   margin-bottom: 16px;
// }

// .userFollowers {
//   font-weight: 500;
//   font-size: 20px;
//   line-height: 1.2;
//   text-transform: uppercase;
//   color: #ebd8ff;
//   margin-bottom: 26px;
// }

// .userToggleFollow {
//   width: 196px;
//   box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
//   border-radius: 10.3108px;
//   padding: 14px 28px;
//   font-family: "Montserrat";
//   font-style: normal;
//   font-weight: 600;
//   font-size: 18px;
//   line-height: 1.2;
//   text-transform: uppercase;
//   color: #373737;
//   transition: box-shadow 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
// }

// .userToggleFollow:hover,
// .userToggleFollow:focus {
//   box-shadow: inset 0 0 30px 10px #646cffaa;
//   scale: 1.1;
// }