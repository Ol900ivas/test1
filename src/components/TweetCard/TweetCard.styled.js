import styled from '@emotion/styled';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  border: none;
  border-radius: 4px;
  
  align-items: center;
  transition: transform 300ms ease-in-out;
&:hover {
    transform: scale(1.2);
`;
