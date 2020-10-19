import styled, { css } from 'styled-components';

const Button = styled.button`
  padding: 0;
  background-color: ${({ theme, activeColor }) => (activeColor ? theme[activeColor] : theme.notes)};
  width: 220px;
  height: 47px;
  border: none;
  border-radius: 50px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 16px;
  text-transform: uppercase;
  transition: all .2s ease-in-out;
  cursor: pointer;
  :hover {
    transform: translateY(1px);
    box-shadow: 0px 10px 30px -10px hsla(0,0%,0%,0.13);
  }

  ${({ secondary }) =>
    secondary &&
    css`
      cursor: pointer;
      background-color: hsl(0, 0%, 90%);
      width: 105px;
      height: 30px;
      font-size: 10px;
      transition: all .2s ease-in-out;
      :hover {
        background-color: hsl(0, 0%, 80%);
      }
    `}
`;

export default Button;
