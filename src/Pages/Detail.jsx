/* 디테일 page => 포스트 클릭시 연결되는 상세페이지 */

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StateHeader, StateHeaderText } from "./Login";
import styled from 'styled-components';
import P3 from '../Public/Images/P3.jpeg';
import { Icon, UserHeader } from '../Components/CardBox';
import { Button } from '../elem/Button';
import  Comment  from '../Components/Comment';
import { useNavigate, useParams } from "react-router-dom";
import { delPostDB } from "../redux/modules/postReducer";

const Detail = ({postId}) => {

  const navigate = useNavigate();
  // const params = useParams();
  const dispatch = useDispatch();
  const postList = useSelector(state=>state.postReducer.list)
  const userData = useSelector(state=>state.userReducer)
  console.log(postList)
  // {postList.data !== undefined ? 
  //   console.log(postList.data.find(v=>v.postId === postId))
  // : ""} 

  // const postId = params.postId
  const postData = postList.data?.find(v=>v.postId === postId)
  console.log(postData);
  const delPostHandler = () => {
    dispatch(delPostDB({postId})) //token 전달 필요
    navigate(-1)
  }
  return (
    <>
      <StateHeader style = {{ backgroundColor : 'var(--green)'}}>
        <StateHeaderText>
          Details!
        </StateHeaderText>
      </StateHeader>
      <DetailWrap>
        <DetailBox>
          <img
            src = {P3}
            style = {{
              width : '400px',
              height : '400px'
            }}></img>
          <Contents>
            <UserHeader style = {{marginLeft : '0'}}>
              <Icon style = {{
                marginRight : '10px',
                width : '40px',
                height : '40px',
                borderRadius : '20px'
                }}></Icon>
              <span style = {{ fontSize : '20px'}}>{userData.nickname}</span>
            </UserHeader>
            <MainText style={{
              postion : 'relative'}}>
              <span>{postData?.text}</span>
            </MainText>
            <CommentWrap style = {{
                position : 'relative'}}>
              <ComTitle>
                Write Comments!
              </ComTitle>
              <CommentInput
                placeholder="댓글을 작성해주세요!"/>
              <Button style = {{
                position : 'absolute',
                bottom : '5px',
                right : '6px'
              }}>POST</Button>
            </CommentWrap>
          </Contents>
        </DetailBox>
        <CommentList>
          <ComTitle>Comments!</ComTitle>
          <Comment></Comment>
        </CommentList>
      <div>{userData.nickname}</div>
      <div>{postData?.postTime}</div>
      <div>{postData?.text}</div>
      {/* <button onClick={()=>navigate(`/detail/update/${postId}`)}>수정하기</button> */}
      {/* <button onClick={()=>delPostHandler}>Delete this</button> */}
      </DetailWrap>
    </>
  )
}

const DetailWrap = styled.div`
  background-color: var(--bg);
  height: 100vh;
  display : flex;

  margin-top: 120px;
  align-items: center;
  flex-direction: column;
  padding: 0 100px;
`;

const DetailBox = styled.div`
  height: 500px;
  width : 100%;
  margin-top: 80px;
  display : flex;
  justify-content: center;
`;

const Contents = styled.div`
  height : 400px;
  width : 700px;
  margin-left: 50px;

  display : flex;
  flex-direction: column;
  align-items: flex-start;
`

const MainText = styled.div`
  height: 100px;
  width : 700px;

  margin-top: 20px;
  padding : 20px;

  box-sizing: border-box;
  border-radius: 8px;
  background-color: white;
`

const CommentWrap = styled.div`
  height : 240px;
  width : 100%;

  display : flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
`

const ComTitle = styled.span`
  font-family: 'Dokdo', cursive;
  font-size: 40px;
  color : var(--blue);
`

export const CommentInput = styled.input`
  width : 100%;
  height: 40px;
  border-radius: 8px;
  border : none;
  padding-left: 15px;
  &::placeholder {
    color : #b8b8b8;
  }
`

const CommentList = styled.div`
  width : 1150px;
  height: 500px; 
  margin-top : 50px;
  box-sizing: border-box;
`
export default Detail;