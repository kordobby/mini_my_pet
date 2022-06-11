import styled from 'styled-components';

export const Button = styled.button`
  width : 100px;
  height: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: Dokdo, cursive;
  font-size : 20px;

  cursor : pointer;
  border : none;
  border-radius: 5px;
  background-color: black;
  color : white;

  &:hover {
    background-color: var(--yellow);
    color : var(--red);
  }
`