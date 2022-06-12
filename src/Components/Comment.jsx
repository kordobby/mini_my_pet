import styled from 'styled-components';
import { useState } from "react";
import { Button } from '../elem/Button';
import { CommentInput } from '../Pages/Detail';

const Comment = () => {
  const [ modal, setModal ] = useState(false);

  const modalHandler = () => {
    modal === true ?  setModal(false) : setModal(true)
  }

  const modalCancel = () => {
      setModal(false) 
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
        <DelBtn>del</DelBtn>
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
          placeholder="수정할 댓글을 작성해주세요!"/>
      <Button style = {{
          position : 'absolute',
          bottom : '25px',
          right : '6px',
          backgroundColor : 'grey'
        }}
        onClick = {modalCancel}>CANCEL</Button>
      <Button style = {{
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