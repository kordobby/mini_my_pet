import { useState } from "react";
import { getCookie } from '../Shared/Cookie';

/* Redux Setup */
import { useSelector, useDispatch } from 'react-redux';
import { delCommentDB, updateCommentDB } from '../redux/modules/commentReducer';

/* Styles */
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { CommentInput } from '../Pages/Detail';

const Comment = ({ username, nickname, comment, postTime, commentId, postId } ) => {
  // props : username, postId, commentId, nickname
  const [ modal, setModal ] = useState(false);
  const [ commentData, setCommentData ] = useState('');
  console.log(postId);
  /* 로그인중인 현재 유저 정보 가져오기 */
  const isLoginUser = useSelector((state) => state.userReducer.username);

  /* 수정 버튼 Modal 구현 */
  const modalHandler = () => {
    modal === true ?  setModal(false) : setModal(true);
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
      commentId : commentId,  // props 로 받으면 수정 필요
      postId : postId
    }))
    setModal(false);
  }

  /* Comment 삭제 서버 요청 보내기 : token, commentId */
  const delCommentHandler = () => {
    console.log(commentId);
    dispatch(delCommentDB({
      token,
      commentId,
      postId : postId
    }))
  }

  return (
    <CommentBoxWrap>

    {/* 댓글 달리는 카드 */}
    <CommentBox>
      <NickBox>
        <span>{nickname}</span> {/* nickname */}
      </NickBox>
      <CommentTexts>
        <span>{comment}</span> {/* commnet */}
      </CommentTexts>
      { isLoginUser === username ? 
      <ButtonBoxComment>
        <DelBtn onClick = {delCommentHandler}><FontAwesomeIcon icon = {faTrashCan}/></DelBtn>
        <DelBtn onClick = {modalHandler}><FontAwesomeIcon icon = {faPenToSquare} /></DelBtn>
      </ButtonBoxComment> : <></> }
      <TimeBox>
        <span>{postTime}</span> {/* createdAt */}
      </TimeBox>
    </CommentBox>

    {/* Modal : 댓글 수정란 */}
    { modal ? <>
    <UpdateBox style = {{ position : 'relative'}}>
      <CommentInput
          type = "text"
          onChange = {(event) => { setCommentData(event.target.value);}}
          placeholder="수정할 댓글을 작성해주세요!"
          required />
      {/* isLoginUser === username ? 버튼 표시 : null */}
      <DelBtn
          style = {{ width : '24px', height: '24px', position : 'absolute',
                     bottom : '28px', right : '6px', fontSize : '12px' }}
           onClick = {modalCancel}><FontAwesomeIcon icon = {faXmark} />
      </DelBtn>
      <DelBtn
          onClick = {updateCommentHandler}
          style = {{  width : '24px', height: '24px', position : 'absolute', bottom : '28px', right : '35px' }}>
            <FontAwesomeIcon icon = {faFloppyDisk} />
      </DelBtn>
    </UpdateBox> </> : <></> }
  </CommentBoxWrap>
  )
}

const CommentBoxWrap = styled.div`
  height : 100%;
  width : 100%;
  background-color  : var(--bg);
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

  @media screen and (max-width : 1300px) {
    height : 100px;
    align-items: flex-start;
    padding-top : 15px;
    flex-direction: column;
} 
`

const DelBtn = styled.button`
  width : 30px;
  height: 30px;

  display : flex;
  align-items: center;
  justify-content: center;

  font-size: 12px;
  border-radius: 15px;
  border : none;
  background-color : #e0d9d9;

  &:hover {
    background-color: var(--blue); // 수정예정
    color : white;
  }
  &:nth-child(2) {
    margin-left : 10px;
  }
`
const UpdateBox = styled.div`
  width : 100%;
  height : 60px;
  margin-top: 10px;
`

const ButtonBoxComment = styled.div`
  width : 10%;
  display : flex;
  align-content: center;
  justify-content: flex-end;
  padding-right: 0px;

  @media screen and (max-width : 1300px) {
  width : 100%;
  align-content: flex-end;
  padding-right: 15px;
} 
`
const TimeBox = styled.div`
  width : 10%;
  display : flex;
  align-content : center;
  justify-content : flex-end;
  padding-right : 20px;
  @media screen and (max-width : 1300px) {
    display : none;
} 
`

const CommentTexts = styled.div`
  width : 70%;
  display : flex;
  align-content: cneter;

  @media screen and (max-width : 1300px) {
    width : 80%;
  }
`
const NickBox = styled.div`
  width : 10%;
  display : flex;
  align-content: center;
  @media screen and (max-width : 1300px) {
    width : 30%;
    margin-bottom: 10px;
  }
`
export default Comment;