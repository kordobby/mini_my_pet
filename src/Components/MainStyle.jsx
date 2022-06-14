import styled from 'styled-components';
import { useState } from 'react'; 
import { BridgeTitle } from '../Pages/Test';
import { ButtonPost } from '../elem/Button';
import CardBox from './CardBox'; 
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
const MainStyle = () => {


  return (
    <MainWrap>
      <MainHeader>
      <BridgeTitle
          style = {{
            color : 'white',
            fontSize : '40px',
            marginBottom : '15px'
          }}>
            GUNDIPANG GALLERY
      </BridgeTitle>
      <ButtonPost > + Post!</ButtonPost>
      </MainHeader>
      <GridWrap>
        <CardBox></CardBox>
        <CardBox></CardBox>
        <CardBox></CardBox>
        <CardBox></CardBox>
      </GridWrap>
      <MainFooter>
        <span>seungjun-Koe is King of Spring</span>
      </MainFooter>
    </MainWrap>
  )
}

const MainWrap = styled.div`
  width : 100%;
  height : 100%;
  background-color: var(--post);
`;

const MainHeader = styled.div`
  width : 100%;
  height: 100px;

  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 28px;
`
const GridWrap = styled.div`
  width : 100%;
  display : grid;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: repeat(1, 500px);
  grid-row-gap: 50px;
  place-items: center;

  @media screen and (max-width : 1300px) {
    grid-template-columns: repeat(3, 33%);
  }
  @media screen and (max-width : 1000px) {
    grid-template-columns: repeat(2, 50%);
  }
  @media screen and (max-width : 600px) {
    grid-template-columns: repeat(1, 100%);
  }
`;

export const MainFooter = styled.div`
  height : 80px;
  width : 100%;

  display : flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 15px;
  color : white;
  font-size: 25px;
  font-family: 'Dokdo', cursive;
`
export default MainStyle;