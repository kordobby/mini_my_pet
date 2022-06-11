// React
import React from "react"
// Style
import styled from 'styled-components';
// Routes
import { useNavigate } from "react-router-dom";
// Redux
import { useState, useEffect } from "react"
import { useSelector } from "react-redux"


const PostItem = ({img_url, nickname, postId, userId, index, textData}) => {
    const navigate = useNavigate();
    return (
      <div>
          <PostWrap>
            <div>{img_url}</div>
            <div>{nickname}</div>
            <div>{postId}</div>
            <div>{userId}</div>
            <div>인덱스{index}</div>
            <div>{textData}</div>
            <button onClick={()=>navigate(`/detail/${postId}`)}>상세로 이동하는 버튼</button>
          </PostWrap>
      </div>
    )
  }

export const PostWrap = styled.div`
  display : flex;
  flex-direction : column;
  width : 200px;
  height : 200px;
  border : 2px solid black;
`


export default PostItem;