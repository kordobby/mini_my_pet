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

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight, faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const dispatch = useDispatch()
  const token = getCookie('token')
  const navigate = useNavigate();

    //2. 저장된 state에서 가져오기
    const postList = useSelector(state=>state.postReducer?.list);
    console.log(postList);
    const postData = postList?.content;              // postData : 데이터 리스트
    const pageSize = postList?.totalPages;           // pageSize : 페이지 수

    /* Pagenation - useState */
    const [ currentPage, setCurrentPage ] = useState(1); // 페이지 이동할 때 사용할 변수
    // const [ upDown, setUpDown ] = useState(true);
    const [ isAsc, setIsAsc ] = useState(true);
    useEffect(() => {
      dispatch(loadPostDB({
        token,
        currentPage : Number(currentPage),
        isAsc
      }));
    },[dispatch])
    console.log(currentPage);

    /* Page 배열 만들기 */
    const pageSizeArr = Array.from({length: Number(pageSize)}, (v, i) => i + 1);

    /* Page change Function */
    const handlePageChange = (payload) => {
      setCurrentPage(payload.currentPage);
      console.log(payload.currentPage);  //2
      dispatch(loadPostDB({
        token,
        currentPage : payload.currentPage,
        isAsc : payload.isAsc,
      }));
    };

    /* 조건문 걸어줘야함 */
    const handlePrevChange = (payload) => {
      setCurrentPage((Number(payload.currentPage) - 1));
      dispatch(loadPostDB({
        isAsc : payload.isAsc,
        token,
        currentPage : (Number(payload.currentPage)) - 1
      }));
    };

    const handleAfterChange = (payload) => {
      setCurrentPage(Number(Number(payload.currentPage) + 1));
      dispatch(loadPostDB({
        isAsc : payload.isAsc,
        token,
        currentPage : Number((payload.currentPage) + 1)
      }));
    };

    const upToDownChange = (payload) => {
      dispatch(loadPostDB({
        token,
        currentPage : Number(payload.currentPage),
        isAsc : payload.isAsc
      }));
    };

    const downToUpChange = (payload) => {
      dispatch(loadPostDB({
        token,
        currentPage : payload.currentPage,
        isAsc : payload.isAsc
      }));
    };
    // const loadingCallback = useCallback(fetcher);
    // 이렇게 되면, 현재 페이지가 설정이 됨 => 여기서 parameter의 값을 바꿔준다면? ${currentPage}
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
        { postData?.map((v) => { 
        return (
        <CardBox
          img_url = {v.img}
          nickname = {v.nickname}
          postId = {v.postId}
          username = {v.username}
          textData = {v.text}
          key = {v.postId}
        ></CardBox> )})}
      </GridWrap>

      <MainFooter>
      {/* 앞으로 가는 버튼 */}
      { (currentPage === 1) ? <></> : <PageButton onClick = {() => handlePrevChange({currentPage, isAsc : isAsc})}><FontAwesomeIcon icon = {faCaretLeft} /></PageButton> }
      {/* Page 넘어가는 버튼 */}
      { pageSizeArr?.map((value, index) => { 
        return ( 
        <PageButton key = {index} onClick = {() => handlePageChange({ currentPage : value, isAsc:isAsc})}>{value}</PageButton> )})}
      { (currentPage >= pageSize) ? <></> : <PageButton onClick = {() => handleAfterChange({currentPage, isAsc : isAsc})}><FontAwesomeIcon icon = {faCaretRight} /></PageButton>}
      </MainFooter>

      <MainFooter style = {{margin : 0, height : '40px'}}>
        <UpDownButton
          style = {{color : 'rgba(162, 46, 40, 0.7)'}}
          onClick = {() => upToDownChange({currentPage : currentPage , isAsc : true})}
          ><FontAwesomeIcon icon = {faCaretUp} /></UpDownButton>
        <UpDownButton
          onClick = {() => downToUpChange({currentPage : currentPage , isAsc : false})}
        ><FontAwesomeIcon icon = {faCaretDown} /></UpDownButton>
      </MainFooter>
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

const PageButton = styled.button`
  width : 25px;
  height : 25px;
  margin: 0 5px;
  color : rgba(255, 250, 250, 0.7);
  font-size: 25px;
  display : flex;
  justify-content: center;
  align-items: center;
  background-color: var(--post);
  border : none;
  &:hover {
    transform: scale(1.4);
    color : white;
  }
`

const UpDownButton = styled.button`
  width : 25px;
  height : 25px;
  margin: 0 5px;
  color : rgba(40, 162, 113, 0.7);
  font-size: 25px;
  display : flex;
  justify-content: center;
  align-items: center;
  background-color: var(--post);
  border : none;
  &:hover {
    transform: scale(1.4);
  }
`
export default Home;