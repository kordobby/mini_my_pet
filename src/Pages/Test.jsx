import styled from 'styled-components';
import P1 from '../Public/Images/P1.jpeg';
import P2 from '../Public/Images/P2.jpeg';
import P3 from '../Public/Images/P3.jpeg';
import P4 from '../Public/Images/P4.jpeg';
import P5 from '../Public/Images/P5.jpeg';

const Test = () => {

  return (
    <BridgeWrap>
      <BridgeTitle>TellmeTellme</BridgeTitle>
      <PhotoWrap>
        <ImgBox src = {P1} />
        <ImgBox src = {P2} />
        <ImgBox src = {P3} />
        <ImgBox src = {P4} />
        <ImgBox src = {P5} style = {{margin : '0'}}/>
      </PhotoWrap>
      <BridgeTitle style = {{ color : 'var(--blue)' }}>WANT TO MEET UR BABIES!</BridgeTitle>
    </BridgeWrap>
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

const BridgeTitle = styled.span`
  font-family : 'Dokdo', cursive;
  font-size : 50px;
  color : var(--red);
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
`
export default Test;