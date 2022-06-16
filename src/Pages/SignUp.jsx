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

  const num = pw.search(/[0-9]/g);
  const eng = pw.search(/[a-z]/ig);
  const spe = pw.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);


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
    if ( !signUpReq.idCheck ) {
      alert('ID 중복검사를 해주세요!');
      return ;
    } else if ( pw !== pw2 ) {
      alert('패스워드가 일치하지 않습니다!')
      return ;
    } else if ( id === "" || pw === "" || pw2 === "" || nickname === "" ) {
      alert('빈칸없이 작성해주세요!')
      return ;
    } else {
    dispatch(signUpDB({
      username : id,
      password : pw,
      nickname
    }));
    ( signUpReq.error ) ? navigate('/login') : navigate('/signup'); }
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
            display : 'flex',
            marginBottom : '10px'
          }}>
          <SignUpInput
            required
            type = "text"
            onChange = {(event) => { setId(event.target.value); }}
            placeholder = "로그인 시 사용할 ID를 입력해주세요." />
          <Button
            onClick = {checkIdHandler}
            style = {{ marginLeft : '5px', fontSize : '16px'
             }}>ID check</Button>
        </div>
        { (!signUpReq.idCheck) ? <p className = "pw-check__notice"> ID 중복검사를 해주세요! </p> : <p className = "correctPw"> 사용 가능한 ID 입니다! </p>}
        </SignUpForm>
        <SignUpForm>
          <label className = 'label-form'>비밀번호</label>
          <SignUpInput
            required
            style = {{ marginBottom : '10px' }}
            type = "password"
            onChange = {(event) => { setPw(event.target.value); }}
            placeholder = "비밀번호를 입력해주세요." />
        { (!checkPw) ? (pw === "") ? <p className = "pw-check__notice"> 영문 대소문자/숫자/특수문자 조합, 8자~12자  </p> : <p className = "incorrectPw"> 비밀번호를 형식에 맞게 작성해주세요! </p> : <p className = "correctPw"> 올바른 비밀번호입니다! </p>}
        </SignUpForm>
        <SignUpForm>
        <label className = 'label-form'>비밀번호 확인</label>
        <SignUpInput
          required
          style = {{ marginBottom : '10px' }}
          type = "password"
          onChange = {(event) => { setPw2(event.target.value); }}
          placeholder = "비밀번호를 재입력해주세요" />
        { (pw === pw2) ? (pw === "" && pw2 === "") ? <></> : <p className = "correctPw"> 비밀번호가 일치합니다! </p> : <p className = "incorrectPw"> 비밀번호가 일치하지 않습니다! </p> }
        </SignUpForm>
        <SignUpForm>
        <label className = 'label-form'>닉네임</label>
        <SignUpInput
          maxLength = "5"
          required
          type = "text"
          onChange = {(event) => { setNickName(event.target.value); }}
          placeholder = "닉네임을 입력해주세요. (5자리 이하!)" />
        </SignUpForm>
      <LoginBtnWrap>
        <Button onClick = {signUpHandler}>Join</Button>
      </LoginBtnWrap>
      </UserPageBox>
    </UserFormWrap>
    </>
  )
}

export const SignUpForm = styled.div`
  width : 100%;
  margin-bottom: 20px;
`

export const SignUpInput = styled.input`
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