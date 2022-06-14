/* 디테일 page => 포스트 클릭시 연결되는 상세페이지 */

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StateHeader, StateHeaderText } from "./Login";
import styled from 'styled-components';
import P3 from '../Public/Images/P3.jpeg';
import { Icon, UserHeader } from '../Components/CardBox';
import { Button } from '../elem/Button';
import  Comment  from '../Components/Comment';
import { useNavigate, useParams } from "react-router-dom";
import { delPostDB } from "../redux/modules/postReducer";
import { loadPostDB } from "../redux/modules/postReducer";
import { getCookie } from "../Shared/Cookie";

const Detail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const postList = useSelector(state=>state.postReducer.list)
  const userData = useSelector(state=>state.userReducer)
  const token = getCookie('token')
  const params = useParams();
  const postId = params.postId;
  
  useEffect(()=>{
      dispatch(loadPostDB(token)) // loadPostDB에 token 입력해야됨
    },[dispatch]);

  // {postList.data !== undefined ? 
  //   console.log(postList.data.find(v=>v.postId === postId))
  // : ""} 
  console.log(postList, "postLIST");
  const postData = postList.data?.find(v=>v.postId === postId)
  console.log(postData, "postdata");
  const delPostHandler = () => {
    dispatch(delPostDB({postId, token})) //token 전달 필요
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
            src = {require("https://www.rd.com/list/black-cat-breeds/").default}
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
            <Button style={{
              display : 'inline-block',
              marginTop : '10px',
              // postion : 'absolute',
              right : '6px'
            }} onClick={()=>navigate(`../detail/update/${postId}`, {replace:true})} >EDIT</Button>
            <Button style={{
              display : 'inline-block',
              marginTop : '10px',
              // postion : 'absolute',
              right : '6px'
            }}>DELETE</Button>
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