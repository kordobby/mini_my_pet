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

export const ButtonPost = styled.button`
  width : 120px;
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: Dokdo, cursive;
  font-size : 30px;

  cursor : pointer;
  border : none;
  border-radius: 5px;
  background-color: black;
  color : white;

  &:hover {
    background-color: var(--red);
    color : white;
  }
`

export const imgUploadLabel = styled.label`
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