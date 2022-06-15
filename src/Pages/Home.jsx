import styled from 'styled-components';
import React, { useState, useEffect } from 'react'; 
import { BridgeTitle } from '../Pages/Test';
import { ButtonPost } from '../elem/Button';
import CardBox from '../Components/CardBox'; 
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Test from '../Pages/Test';
import { loadPostDB } from "../redux/modules/postReducer";
import { getCookie } from "../Shared/Cookie";


const Home = () => {
  const dispatch = useDispatch()
  const token = getCookie('token')
  const navigate = useNavigate();

    //2. 저장된 state에서 가져오기
    const postList = useSelector(state=>state.postReducer?.list);
    console.log(postList);
    const loadingState = useSelector(state=>state.postReducer?.loading);

  return (
    <>
    <Test/>
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
      <ButtonPost onClick={()=>navigate('/post')}> + Post!</ButtonPost>
      </MainHeader>
      <GridWrap>
        { (postList !== undefined) ? postList?.map((v, i) => { //is_loading 활용해서 만들수 있음
        return (
        <CardBox
          img_url = {v.img}
          nickname = {v.nickname}
          postId = {v.postId}
          username = {v.username}
          textData = {v.text}
          key = {v.postId}
        > 
        </CardBox>
        )}) : <></> }
      </GridWrap>
      <MainFooter>
        <span>seungjun-Koe is King of Spring</span>
      </MainFooter>
    </MainWrap>
    </>
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
export default Home;