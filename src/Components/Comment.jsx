import styled from 'styled-components';
import { useState } from "react";
import { Button } from '../elem/Button';
import { CommentInput } from '../Pages/Detail';
import { useDispatch } from 'react-redux';
import { delCommentDB, updateCommentDB } from '../redux/modules/commentReducer';
import { getCookie } from '../Shared/Cookie';


const Comment = () => {
  // props : username, postId, commentId
  const [ modal, setModal ] = useState(false);
  const [ commentData, setCommentData ] = useState('');

  /* 수정 버튼 Modal 구현 */
  const modalHandler = () => {
    modal === true ?  setModal(false) : setModal(true)
  }
  // 취소버튼
  const modalCancel = () => {
      setModal(false) 
  }

  /* Comment 수정 서버 요청 보내기 : token, 댓글 내용, 댓글 고유 ID */
  const token = getCookie('token');
  const dispatch = useDispatch(); 

  const updateCommentHandler = () => {
    dispatch(updateCommentDB({
      token : token,
      comment : commentData,
      commentId : 'commentId'  // props 로 받으면 수정 필요
    }))
  }

  /* Comment 삭제 서버 요청 보내기 : token, commentId */
  const delCommentHandler = () => {
    dispatch(delCommentDB({
      token : token,
      commentId : 'commentId' // props 로 받으면 수정 필요
    }))
  }

  return (
    <CommentBoxWrap>
    <CommentBox>
      <div style = {{
        width : '10%', 
        display : "flex",
        alignContent : 'center'}}>
        <span>user_nick</span>
      </div>
      <div style = {{
        width : '70%',
        display : "flex",
        alignContent : 'center'
        }}>
        <span>헐 너무 귀여워요!</span>
      </div>
      <div style = {{
        width : '10%',
        display : "flex",
        alignContent : 'center',
        justifyContent : 'flex-end',
        paddingRight : '20px'}}>
        <DelBtn onClick = {delCommentHandler}>del</DelBtn>
        <DelBtn style = {{
          marginLeft : '10px'
        }} onClick = {modalHandler}>up</DelBtn>
      </div>
      <div style = {{
        width : '10%',
        display : "flex",
        alignContent : 'center',
        justifyContent : 'flex-end',
        paddingRight : '20px'}}>
        <span>00-00-00</span>
      </div>
    </CommentBox>
    { modal ? <>
    <UpdateBox style = {{
        position : 'relative'}}>
      <CommentInput
          type = "text"
          onChange = {(event) => { setCommentData(event.target.value);}}
          placeholder="수정할 댓글을 작성해주세요!"
          required />
      <Button
          style = {{
            position : 'absolute',
            bottom : '25px',
            right : '6px',
            backgroundColor : 'grey'
        }}
        onClick = {modalCancel}>CANCEL</Button>
      <Button
        onClick = {updateCommentHandler}
        style = {{
            position : 'absolute',
            bottom : '25px',
            right : '110px'
          }}>UPDATE</Button>
    </UpdateBox> </> : <></> }
  </CommentBoxWrap>
  )
}

const CommentBoxWrap = styled.div`
  
`

const CommentBox = styled.div`
  width : 100%;
  height: 50px;
  background-color: white;
  border-radius: 8px;

  display: flex;
  align-items: center;
  
  padding-left : 20px;
  margin-top: 20px;
`

const DelBtn = styled.button`
  width : 30px;
  height: 30px;

  border-radius: 15px;
  border : none;
  background-color: var(--yellow); // 수정예정

  &:hover {
    background-color: var(--blue); // 수정예정
  }
`
const UpdateBox = styled.div`
  width : 100%;
  height : 60px;
  margin-top: 10px;
`

export default Comment;