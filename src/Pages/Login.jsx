/* 로그인 page */
import React, { useState } from 'react';
import {KAKAO_AUTH_URL} from '../Kakao';
import { useEffect } from 'react';
/* Styles */
import styled from 'styled-components';

/* Routes */
import { useNavigate, Link } from 'react-router-dom';

/* REDUX */
import { useDispatch, useSelector } from 'react-redux';
import { loginDB } from '../redux/modules/userReducer';

import { Button } from '../elem/Button';

const Login = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const request = useSelector((state) => state.userReducer);

  const [ id, setId ] = useState('');
  const [ pw, setPw ] = useState('');

  const loginHandler = async () => {
    dispatch(loginDB({
      username : id,
      password : pw
    }))
  };

  useEffect(() => { 
    ( request.login === true ) ? navigate('/') : navigate('/login')
  }, [request.login]);

  return (
    <>
      <StateHeader>
        <StateHeaderText>
          Login!
        </StateHeaderText>
      </StateHeader>
      {/* <Blank>
      </Blank> */}
      <UserFormWrap>
        <UserPageBox>
          <UserTitle>Welcome!</UserTitle>
          <InputBox 
            type = "text"
            onChange = {(event) => { setId(event.target.value); }}
            placeholder = "ID"
            required />
          <InputBox
            type = "password" 
            onChange = {(event) => { setPw(event.target.value); }} 
            placeholder = "PW"
            required />
        <LoginBtnWrap>
        <Button
            onClick = {loginHandler}
            style = {{
              marginTop : '6px',
              marginBottom : '10px'
            }}>Sign In</Button>
        <Link to = '/signup'><span
            style = {{
              fontSize : '12px',
              fontWeight : '400',
              color : 'black'
        }}>Create Account</span>
        </Link>
        </LoginBtnWrap>
        <KakaoWrap>
          <a href = {KAKAO_AUTH_URL}><span
            style = {{
              fontWeight : '600',
              fontSize : '20px',
              color : '#181700'
          }}>Login with Kakao</span></a>
        </KakaoWrap>
        </UserPageBox>
      </UserFormWrap>
    </>
  )
}

export const StateHeader = styled.div`
  z-index: 5;

  width : 100%;
  height: 30px;

  background-color: var(--yellow);

  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top : 0;
`

export const StateHeaderText = styled.span`
  font-family: Dokdo, cursive;
  font-size: 28px;
  color : white;
`

/* Header 아래로 보이는 main-box */
export const UserFormWrap = styled.div`
  box-sizing: border-box;
  margin-top : 50px;
  width : 100%;
  height: 100vh;
  
  display : flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width : 800px) {
    margin-top : 10px;
  }
`
export const UserPageBox = styled.div`
  box-sizing : border-box;

  width : 500px;
  height : 350px;
  padding : 30px;
  display : flex;
  flex-direction: column;
  align-items: center;
  border : 1px solid #d2d2d2;
  border-radius: 8px;

  @media screen and (max-width : 800px) {
    border : none;
  }
`
export const UserTitle = styled.div`
  font-family: Dokdo, cursive;
  font-size : 50px;
  margin-top: 10px;
  margin-bottom: 20px;
`
export const InputBox = styled.input`
  width : 100%;
  height : 2rem;
  border : none;
  border-bottom: 1.5px solid black;
  margin-bottom: 10px;
&::placeholder {
  color : black;
}
`

export const LoginBtnWrap = styled.div`
  width : 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const KakaoWrap = styled.div`
  width : 100%;
  height: 40px;
  
  margin-top: 15px;
  border-radius: 5px;
  background-color: #ffe926;

  display: flex;
  justify-content: center;
  align-items: center;
`
export default Login;