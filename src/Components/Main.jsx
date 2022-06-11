/* 비로그인/로그인 상태 모두에서 보여지는 Component, Home.jsx 페이지에 렌더링 됨
*/
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PostItem from "./PostItem";
import styled from "styled-components"

const Main = () => {
const postList = useSelector(state=>state.postReducer.list)
console.log(postList)
  return (
    <>
    <MainJumbotron>여기는 MainJumbotron 공간입니다.</MainJumbotron>  
      {postList.map((v, i) => {
        return (
        <PostItem
          img_url = {v.img}
          nickname = {v.nickname}
          postId = {v.postId}
          userId = {v.userId}
          textData = {v.text}
          index = {i}
          key = {v.postId}
        >
          {console.log(v)}
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
  margin-top : 100px;
`

export default Main;