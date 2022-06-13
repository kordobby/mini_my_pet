/* 비로그인/로그인 상태 모두에서 보여지는 Component, Home.jsx 페이지에 렌더링 됨
*/
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostItem from "./PostItem";
import styled from "styled-components"
import { loadPostDB } from "../redux/modules/postReducer";
import { getCookie } from "../Shared/Cookie";

const Main = () => {
  const dispatch = useDispatch()

  //1. 서버에서 load
  useEffect(()=>{
    dispatch(loadPostDB()) // loadPostDB에 token 입력해야됨
  }, [dispatch])
  
  //2. 저장된 state에서 가져오기
  const postList = useSelector(state=>state.postReducer.list)
  console.log(postList)
  return (
    <>
      {postList.map((v, i) => {
        return (
        <PostItem
          img_url = {v.img}
          nickname = {v.nickname}
          postId = {v.postId}
          username = {v.username}
          textData = {v.text}
          index = {i}
          key = {v.postId}
        >
        </PostItem>
        )
      })}
    </>
  );
}

export const MainJumbotron = styled.div`
  height : 400px;
  background-color : white;
  text-align : center;
  font-size : 100px;
  margin-top : 60px;
`

export default Main;