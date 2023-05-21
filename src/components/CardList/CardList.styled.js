import styled from '@emotion/styled';

export const Ul = styled.ul`
  display: flex;
  justify-self: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
  padding: 0;
  margin-top: 16px;
  margin-bottom: 40px;
`;

export const Li = styled.li`
  // padding-left: 8px;
  // padding-right: 8px;
  // gap: 40px;
  align-items: center;
  justify-content: space-between;
`;

export const Btn = styled.button`
display: block;
margin: 0 auto;
padding-top: 14px;
padding-bottom: 14px;
width: 196px;
border: none;
cursor: pointer;
border-radius: 10px;
font-weight: 600;
font-size: 18px;
line-height: 1,2;
text-transform: uppercase;
background-color: var(--btn-bg-color);
box-shadow: var(--btn-shadow);
color: var(--dark-text-color);
transition: transform 300ms ease-in-out;
&:hover {
    // transform: scale(1.05);
    color: var(--light-text-color);
    background: var(--card-bg);
`;
