/* 회원가입 page */
import React, { useState } from 'react';

/* import Components */
import { UserFormWrap, UserPageBox, UserTitle, InputBox, Button } from './Login';
/* Cookies */
//

/* Style */
import styled from 'styled-components';

/* Router */
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signUpDB, checkIdDB } from '../redux/modules/userReducer';

const SignUp = () => {

  const [ id, setId ] = useState('');
  const [ pw, setPw ] = useState('');
  const [ pw2, setPw2 ] = useState('');
  const [ nickname, setNickName ] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const signUpReq = useSelector((state) => state.userReducer);
  console.log(signUpReq);

  const num = pw.search(/[0-9]/g);
  const eng = pw.search(/[a-z]/ig);
  const spe = pw.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);

  const checkPwForm = () => {
    if(pw.length < 8 || pw.length > 20){
      alert("비밀번호는 8자리 ~ 20자리 이내로 입력해주세요.");
      return ;
     }else if(pw.search(/\s/) != -1){
      alert("비밀번호는 공백 없이 입력해주세요.");
      return ;
     }else if(num < 0 || eng < 0 || spe < 0 ){
      alert("비밀번호는 영문, 숫자, 특수문자를 혼합하여 입력해주세요.");
      return ;
     }else {
        return true;
     }
  }

  const signUpHandler = () => {
    checkPwForm();
    dispatch(signUpDB({
      userId : id,
      password : pw,
      nickname
    }));
    ( signUpReq.error ) ? navigate('/login') : navigate('/signup');
  }

  const checkIdHandler = () => {
    dispatch(checkIdDB({
      userId : id
    }))
  }

  return (
    <>
    <UserFormWrap>
      <UserPageBox>
        <UserTitle></UserTitle>
        <InputBox
          type = "text"
          onChange = {(event) => { setId(event.target.value); console.log(id);}}
          placeholder = "로그인 시 사용할 ID를 입력해주세요." />
        <Button onClick = {checkIdHandler}>ID 중복확인</Button>
        <InputBox
          type = "text"
          onChange = {(event) => { setPw(event.target.value); console.log(pw);}}
          placeholder = "비밀번호를 입력해주세요." />
        <InputBox
          type = "text"
          onChange = {(event) => { setPw2(event.target.value); console.log(pw2);}}
          placeholder = "비밀번호를 재입력해주세요" />
        { (pw === pw2) ? <p> 비밀번호가 일치합니다! </p> : <p> 비밀번호가 일치하지 않습니다! </p>}
        <InputBox
          type = "text"
          onChange = {(event) => { setNickName(event.target.value); console.log(nickname);}}
          placeholder = "닉네임을 입력해주세요." />
      </UserPageBox>
      <Button onClick = {signUpHandler}>회원가입</Button>
    </UserFormWrap>
    </>
  )
}

export default SignUp;