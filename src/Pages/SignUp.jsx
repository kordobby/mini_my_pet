/* 회원가입 page */
import React, { useEffect, useState } from 'react';

/* import Components */
import { UserFormWrap, UserPageBox, UserTitle, LoginBtnWrap, StateHeader, StateHeaderText } from './Login';
import { Button } from '../elem/Button';
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
  const [ checkPw, setCheckPw ] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const signUpReq = useSelector((state) => state.userReducer);
  console.log(signUpReq);

  const num = pw.search(/[0-9]/g);
  const eng = pw.search(/[a-z]/ig);
  const spe = pw.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);

  /* 회원가입 실패 버튼 누르기 전에 미리 형식 확인할 수 있는 것이
     사용자의 입장에서 좋을 것 같아서, 알림문구로 변경! */
  // const checkPwForm = () => {
  //   if(pw.length < 8 || pw.length > 20){
  //     alert("비밀번호는 8자리 ~ 20자리 이내로 입력해주세요.");
  //     return ;
  //    }else if(pw.search(/\s/) != -1){
  //     alert("비밀번호는 공백 없이 입력해주세요.");
  //     return ;
  //    }else if(num < 0 || eng < 0 || spe < 0 ){
  //     alert("비밀번호는 영문, 숫자, 특수문자를 혼합하여 입력해주세요.");
  //     return ;
  //    }else {
  //       return true;
  //    }
  // }

  useEffect(() => {
    if ( pw.length < 8 || pw.length > 12) {
      setCheckPw(false);
    } else if ( pw.search(/\s/) != -1 ) {
      setCheckPw(false);
    } else if ( num < 0 || eng < 0 || spe < 0 ) {
      setCheckPw(false);
    } else if ( pw === null ) {
      setCheckPw(false)
    }else {
      setCheckPw(true);
    }
  }, [pw])

  const signUpHandler = () => {
    dispatch(signUpDB({
      username : id,
      password : pw,
      nickname
    }));
    ( signUpReq.error ) ? navigate('/login') : navigate('/signup');
  }

  const checkIdHandler = () => {
    dispatch(checkIdDB({
      username : id
    }))
  }

  return (
    <>
    <StateHeader>
      <StateHeaderText>
          Join Us!
      </StateHeaderText>
    </StateHeader>
    <UserFormWrap>
      <UserPageBox
          style = {{
            height: '480px'
          }}>
        <UserTitle>Be Our Friends!</UserTitle>
        <SignUpForm>
        <label className = 'label-form'>아이디</label>
        <div
          style = {{
            display : 'flex'
          }}>
          <SignUpInput
            type = "text"
            onChange = {(event) => { setId(event.target.value); console.log(id);}}
            placeholder = "로그인 시 사용할 ID를 입력해주세요." />
          <Button
            onClick = {checkIdHandler}
            style = {{ marginLeft : '5px', fontSize : '16px'
             }}>ID check</Button>
        </div>
        </SignUpForm>
        <SignUpForm>
          <label className = 'label-form'>비밀번호</label>
          <SignUpInput
            style = {{ marginBottom : '10px' }}
            type = "password"
            onChange = {(event) => { setPw(event.target.value); console.log(pw);}}
            placeholder = "비밀번호를 입력해주세요." />
        { (!checkPw) ? (pw === "") ? <p className = "pw-check__notice"> 영문 대소문자/숫자/특수문자 조합, 8자~12자  </p> : <p className = "incorrectPw"> 비밀번호를 형식에 맞게 작성해주세요! </p> : <p className = "correctPw"> 올바른 비밀번호입니다! </p>}
        </SignUpForm>
        <SignUpForm>
        <label className = 'label-form'>비밀번호 확인</label>
        <SignUpInput
          style = {{ marginBottom : '10px' }}
          type = "password"
          onChange = {(event) => { setPw2(event.target.value); console.log(pw2);}}
          placeholder = "비밀번호를 재입력해주세요" />
        { (pw === pw2) ? (pw === "" && pw2 === "") ? <></> : <p className = "correctPw"> 비밀번호가 일치합니다! </p> : <p className = "incorrectPw"> 비밀번호가 일치하지 않습니다! </p> }
        </SignUpForm>
        <SignUpForm>
        <label className = 'label-form'>닉네임</label>
        <SignUpInput
          type = "text"
          onChange = {(event) => { setNickName(event.target.value); console.log(nickname);}}
          placeholder = "닉네임을 입력해주세요." />
        </SignUpForm>
      <LoginBtnWrap>
        <Button onClick = {signUpHandler}>Join</Button>
      </LoginBtnWrap>
      </UserPageBox>
    </UserFormWrap>
    </>
  )
}

const SignUpForm = styled.div`
  width : 100%;
  margin-bottom: 20px;
`

const SignUpInput = styled.input`
  width : 100%;
  height: 30px;

  border: 1px solid #d2d2d2;
  border-radius: 5px;
  padding-left : 10px;
  &::placeholder {
    font-size: 12px;
  }
`
export default SignUp;