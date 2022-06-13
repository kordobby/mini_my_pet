import styled from 'styled-components';

export const AddPostBtn = styled.button`
  width : 80px;
  height: 80px;

  justify-content: center;
  align-items: center;
  font-size : 75px;

  position: fixed;
  bottom: 3rem;
  right: 3rem;

  cursor : pointer;
  border-radius : 100px;
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