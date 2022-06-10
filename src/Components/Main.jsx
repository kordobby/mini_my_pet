/* 비로그인/로그인 상태 모두에서 보여지는 Component, Home.jsx 페이지에 렌더링 됨
*/
import React from "react";
import { useSelector } from "react-redux";

export const PostItem = () => {
  return (
    <div>
    </div>
  )
}

const Main = () => {
 const postList = useSelector(state=>state.postReducer.result)
console.log(postList)
  return (
    <>
      {postList.map((v, i) => {
        return (
        <PostItem
          img_url = {v.img}
          nickname = {v.nickname}
          postId = {v.postId}
          userId = {v.userId}
          index = {i}
          key = {v.postId}
        ></PostItem>
        )
      })}
    </>
  );
}

export default Main;