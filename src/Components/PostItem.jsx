// React
import React from "react"
// Style
import styled from 'styled-components';
// Routes
import { useNavigate, Link } from "react-router-dom";


const PostItem = ({img_url, nickname, postId, username, index, textData}) => {
    const navigate = useNavigate();
    return (
      <div>
          <PostWrap>
            <div>{img_url}</div>
            <div>{nickname}</div>
            <div>{postId}</div>
            <div>{username}</div>
            <div>{index}</div>
            <div>{textData}</div>
<<<<<<< HEAD
            <Link to={`/detail/${postId}`}>
            <button>상세로 이동하는 버튼</button>
            </Link>
=======
            <button onClick={() => {navigate(`/detail/${postId}`)}}>상세로 이동하는 버튼</button>
>>>>>>> 3b773bf64304b721a2e0f74457cd080d2d99488a
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