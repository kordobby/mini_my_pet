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
import { useQuery, useQueryClient } from 'react-query';
import axios from 'axios';

const Home = () => {
  const dispatch = useDispatch()
  const token = getCookie('token')
  const navigate = useNavigate();

  // useEffect(() => {
  //   dispatch(loadPostDB(token));
  // },[dispatch])

    //2. 저장된 state에서 가져오기
    const postList = useSelector(state=>state.postReducer?.list);
    console.log(postList);
    const loadingState = useSelector(state=>state.postReducer?.loading);

    /* Pagenation - useState */
    const [ page, setPage ] = useState(1); // 페이지 갯수 그려낼 값
    const [ currentPage, setCurrentPage ] = useState(1); // 페이지 이동할 때 사용할 변수

    /* React-query : GET_POST request */
    const fetcher = async () => {
      const post = await axios.get("http://3.39.25.179:8080/api/main?page=1&size=2&sortBy=postId&isAsc=false", {
        headers: {
            Authorization : `Bearer ${token}`
        }});
      return post.data;
    };
    const { data, isLoading, error, isError } = useQuery("posts", fetcher);
    /* totalPosts, currentPage, pageLength, itemPerPage */
    console.log(data);
    const postData = data?.content;              // postData : 데이터 리스트
    const pageSize = data?.pageable.pageSize;    // pageSize : 페이지 수
    const postEmpty = data?.empty;               // postEmpty : 데이터 유무
    const postArray = data?.sort.sorted;         // postArray : 정렬 순서 (오름차순 / 내림차순)

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
        <button>see more!</button>
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
export default Home;