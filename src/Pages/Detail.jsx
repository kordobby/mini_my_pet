/* 디테일 page => 포스트 클릭시 연결되는 상세페이지 */

/* Hooks */
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

/* Styles */
import { StateHeader, StateHeaderText } from "./Login";
import styled from 'styled-components';
import P3 from '../Public/Images/P3.jpeg';
import { Icon, UserHeader } from '../Components/CardBox';
import { Button } from '../elem/Button';
import  Comment  from '../Components/Comment';

/* Redux setup */
import { delPostDB } from "../redux/modules/postReducer";
import { loadCommentDB, addCommentDB } from "../redux/modules/commentReducer";
import { useDispatch, useSelector } from "react-redux";

/* Cookies */
import { getCookie } from "../Shared/Cookie";

const Detail = ( ) => {
  // props로 받아올 수 없어서 삭제했습니다-!

  /* token 받아오기, DB request function 모두 보내주기! */
  const token = getCookie('token');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const postList = useSelector(state => state.postReducer.list)
  const userData = useSelector(state => state.userReducer)
  console.log(postList);  // 새로고침하면 모든 데이터가 날아가버림, DB에서 로드하는 과정 필요할까
  // postList => 모든 게시물
  // nickname = userData.nickname, username = userData.username

  const { postId } = useParams();
  const postData = postList.filter((value) => (value.postId === Number(postId)));
  console.log(postData.text); // 잘 찍히는 것 확인

  const delPostHandler = () => {
    dispatch(delPostDB({postId})) //token 전달 필요 
  }

  /* YOON'S CODE - comment things */

  const [ comments, setComments ] = useState('');

  const CommentList = useSelector((state) => state.commentReducer?.list);
  // CommentList.loading = true / false
  useEffect(() => {
    dispatch(loadCommentDB(token));
  }, [dispatch]);

  // Comment ADD - userData 잘 넘어가는 것 확인함
  const commentHandler = () => {
    dispatch(addCommentDB({
      postId,
      token,
      comment : comments,
      username : userData.username,
      nickname : userData.nickname
    }))
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
          <img src = {P3} style = {{ width : '400px', height : '400px' }}></img>
          <Contents>
            <UserHeader style = {{marginLeft : '0'}}>
              <Icon style = {{marginRight : '10px', width : '40px', height : '40px', borderRadius : '20px'}}></Icon>
              <span style = {{ fontSize : '20px'}}>{userData.nickname}</span>
            </UserHeader>
            <MainText>
              <span>{postData.text}</span>
            </MainText>
            <div style = {{ display : "flex", width : '100%', justifyContent : 'flex-end', marginTop : "10px" }}>
              <Button
                onClick={() => {navigate(`/detail/update/${postId}`)}}
                style = {{
                  marginRight : '10px'
                }}>update!</Button>
              <Button onClick={delPostHandler}>delete!</Button>
            </div>
            <CommentWrap style = {{
                position : 'relative'}}>
              <ComTitle>
                Write Comments!
              </ComTitle>
              <CommentInput
                onChange = {(event) => { setComments(event.target.value); }}
                placeholder="댓글을 작성해주세요!"/>
              <Button
                onClick = {commentHandler}
                style = {{
                  position : 'absolute',
                  bottom : '5px',
                  right : '6px'
              }}>POST</Button>
            </CommentWrap>
          </Contents>
        </DetailBox>
        <CommentListForm>
          <Comment/><Comment/><Comment/>
          {/* <ComTitle>Comments!</ComTitle>
          { 
              CommentList?.map((value, index) => {
                return <div
                  key = {value.commentId}
                  text = {value.username}
                  nickname = {value.nickname}
                  comment = {value.comment}
                  modifiedAt = {value.modifiedAt} />
              } )} */}
        </CommentListForm>
      </DetailWrap>
      <DetailFooter></DetailFooter>
    </>
  )
}

const DetailWrap = styled.div`
  background-color: var(--bg);
  height: 100%;
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

  @media screen and (max-width : 1300px) {
    flex-direction: column;
    align-items: center;
    margin-top: 200px;
  }
`;

const Contents = styled.div`
  height : 400px;
  width : 700px;
  margin-left: 50px;

  display : flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (max-width : 1300px) {
    margin : 30px;
    width : 400px;
  }
`

const MainText = styled.div`
  height: 100px;
  width : 700px;

  margin-top: 20px;
  padding : 20px;

  box-sizing: border-box;
  border-radius: 8px;
  background-color: white;

  @media screen and (max-width : 1300px) {
    width : 400px;
    margin-top: 10px;
  }
`

const CommentWrap = styled.div`
  height : 240px;
  width : 100%;

  display : flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;

  @media screen and (max-width : 1300px) {
    height : 120px;
  }
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

const CommentListForm = styled.div`
  width : 1150px;
  margin-top : 50px;
  box-sizing: border-box;
  
  @media screen and (max-width : 1300px) {
    width : 400px;
    margin-top : 100px;
  }
`

const DetailFooter = styled.div`
  height : 80px;
  width : 100%; 
  background-color: var(--bg);
`
export default Detail;