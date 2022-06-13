import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import P1 from '../Public/Images/P1.jpeg';
import P2 from '../Public/Images/P2.jpeg';
import P3 from '../Public/Images/P3.jpeg';
import P4 from '../Public/Images/P4.jpeg';
import P5 from '../Public/Images/P5.jpeg';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';

const Test = () => {
  const scollToRef = useRef();
  const handleToPost = () => {
    scollToRef.current.scrollIntoView({behavior: "smooth", block: "start"});
  }

  return (
    <>
    <BridgeWrap>
      <BridgeTitle>TellmeTellme</BridgeTitle>
      <PhotoWrap>
        <ImgBox src = {P1} />
        <ImgBox src = {P2} />
        <ImgBox src = {P3} />
        <ImgBox src = {P4} />
        <ImgBox src = {P5} style = {{margin : '0'}}/>
      </PhotoWrap>
      <BridgeTitleBtm style = {{ color : 'var(--blue)' }}>WANT TO MEET UR BABIES!</BridgeTitleBtm>
      <div style = {{
        color : 'var(--post)',
        fontSize : '40px',
        marginTop : '20px'
      }}><button onClick = {handleToPost} ><FontAwesomeIcon icon = {faAnglesDown} /></button></div>
    </BridgeWrap>
    <div ref = {scollToRef} style = {{ height : '150px', width : '100%', backgroundColor : 'yellow'}}></div></>
  )
}

const BridgeWrap = styled.div`
  margin-top : 120px;
  width : 100%;
  height: 500px;
  
  display : flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: var(--bg);
`

export const BridgeTitle = styled.span`
  font-family : 'Dokdo', cursive;
  font-size : 50px;
  color : var(--red);
`
const BridgeTitleBtm = styled.span`
  font-family : 'Dokdo', cursive;
  font-size : 40px;
  color : var(--blue);
  @media screen and (max-width : 600px) {
    margin-top: 20px;
    font-size : 30px;
  }
`

const PhotoWrap = styled.div`
  width : 100%;
  height : 250px;
  margin : 15px 0px;

  display : flex;
  align-items: center;
  justify-content: center;
`
const ImgBox = styled.img`
  width : 200px;
  margin-right: 15px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  &:nth-child(5) {
    @media screen and (max-width : 1300px) {
      display : none;
    }
  }
  &:nth-child(4) {
    @media screen and (max-width : 1000px) {
      display : none;
    }
  }
  &:nth-child(3) {
    @media screen and (max-width : 800px) {
      display : none;
    }
  }
  &:nth-child(2) {
    @media screen and (max-width : 600px) {
      display : none;
    }
  }
  &:nth-child(1) {
    @media screen and (max-width : 600px) {
      width : 250px;
      height: 250px;
    }
  }
`
export default Test;