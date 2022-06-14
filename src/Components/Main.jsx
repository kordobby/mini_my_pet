/* 비로그인/로그인 상태 모두에서 보여지는 Component, Home.jsx 페이지에 렌더링 됨
*/
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostItem from "./PostItem";
import { loadPostDB } from "../redux/modules/postReducer";
import { getCookie } from "../Shared/Cookie";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const dispatch = useDispatch()
  const token = getCookie('token')
  const navigate = useNavigate();

  //1. 서버에서 load
  useEffect(()=>{
    dispatch(loadPostDB(token)) // loadPostDB에 token 입력해야됨
  },[dispatch]);
  
  //2. 저장된 state에서 가져오기
  const postList = useSelector(state=>state.postReducer.list)
  console.log(postList)
  
  return (
<<<<<<< HEAD
=======

>>>>>>> 3b773bf64304b721a2e0f74457cd080d2d99488a
    <>
      {postList?.map((v, i) => { //is_loading 활용해서 만들수 있음
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

export default Main;