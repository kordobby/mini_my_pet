import styled from 'styled-components';
import { keyframes } from 'styled-components';
import A6 from '../Public/Images/A6.png';
import { Link } from 'react-router-dom';
const AboutUsBtn = () => {

  return (
    <>
    <IconBox>
      <Link to = '/aboutus'><img style = {{ width : '100%', height : '100%'}}src = {A6} alt = ""/></Link>
    </IconBox></>
  )
};

const hello = keyframes`
  0% {
    transform: none;
  } 50% {
    transform: translateY(-10px);
  } 100% {
    transform: none;
  }
  `

const IconBox = styled.div`
  cursor : pointer;
  width : 100px;
  height : 100px;
  display : flex;
  justify-content: center;
  align-items: center;
  position : fixed;
  top : 130px;
  right : 5px;
  &:hover {
    color : var(--red);
    animation : ${hello} 1s infinite linear alternate;
  }
`;


export default AboutUsBtn;