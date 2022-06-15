/* 수정 page */
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom";
import { updatePostDB } from "../redux/modules/postReducer";
import { getCookie } from "../Shared/Cookie";

/* import Components */
import { InputBox, UserFormWrap, UserPageBox, UserTitle, LoginBtnWrap, StateHeader, StateHeaderText } from './Login';
import { Button } from '../elem/Button';
import { useEffect } from "react";
import { useState } from "react";

const Update = () => {
  const navigate = useNavigate();
  const params = useParams();
  const text_ref = useRef(null);
  const distpatch = useDispatch();
  const postId = params.postId;
  const postList = useSelector((state) =>state.postReducer?.list)
  
  const updatePostHandler = () => {
  distpatch(updatePostDB({
    postId,
    token: getCookie('token'),
    text: text_ref.current?.value}))
    navigate(-1);
  }

  return (
    <>
      <UserFormWrap>
        <UserPageBox style = {{ height : '250px'}}>
          <UserTitle>Update!</UserTitle>
          <InputBox 
            type = "text"
            ref={text_ref}
            placeholder = "UPDATE"
            required 
            />
        <LoginBtnWrap
          style = {{
            marginTop : '20px',
            flexDirection : 'row',
            alignContent : 'center',
            justifyContent : 'flex-end',
            width : '100%'
          }}>
        <Button
            onClick={updatePostHandler}
            style = {{
              marginTop : '6px',
              marginBottom : '10px',
              marginRight : '10px'
            }}>Update</Button>
        <Button
            onClick={()=>(navigate(-1))}
            style = {{
              marginTop : '6px',
              marginBottom : '10px'
            }}>Cancel</Button>
        </LoginBtnWrap>
        </UserPageBox>
      </UserFormWrap>
    </>
  )
}

export default Update;