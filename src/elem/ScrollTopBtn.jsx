import styled from 'styled-components';
import { keyframes } from 'styled-components';

const ScrollTopBtn = () => {
  
  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior : 'smooth'
    });
  }

  return (
    <ScrollBox onClick = {handleTop}>
      <span>Top!</span>
    </ScrollBox>
  )
};

export const boxFade = keyframes`
  0% {
    transform: none;
  } 50% {
    transform: translateY(-10px);
  } 100% {
    transform: none;
  }
  `

const ScrollBox = styled.div`
  width : 50px;
  height : 50px;
  border-radius: 25px;
  background-color: rgba(255, 255, 255, 0.6);
  font-size: 25px;
  color : #578b67;
  font-family: 'Dokdo', cursive;
  display : flex;
  justify-content: center;
  align-items: center;
  position : fixed;
  bottom : 20px;
  right : 20px;
  cursor : pointer;
  &:hover {
    background-color: white;
    color : var(--red);
    animation : ${boxFade} 1s infinite linear alternate;
  }
`;


export default ScrollTopBtn;