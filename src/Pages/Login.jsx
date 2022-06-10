/* 로그인 page */
import React, { useState } from 'react';

/* Styles */
import styled from 'styled-components';

/* Routes */
import { useNavigate } from 'react-router-dom';

/* REDUX */
import { useDispatch, useSelector } from 'react-redux';
import { loginDB } from '../redux/modules/userReducer';

const Login = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const request = useSelector((state) => state.userReducer);
  console.log(request);

  const [ id, setId ] = useState('');
  const [ pw, setPw ] = useState('');

  const loginHandler = () => {
    dispatch(loginDB({
      userId : id,
      password : pw
    }))
    if ( request.login === true ) {
      navigate('/')
    } else if ( request.error ) {
      setId(null);
      setPw(null);
    }
  };

  return (
    <UserFormWrap>
      <UserPageBox>
        <UserTitle>LOGIN PAGE</UserTitle>
        <InputBox 
          type = "text"
          onChange = {(event) => { setId(event.target.value); console.log(id);}}
          placeholder = "ID를 입력해주세요."
          required />
        <InputBox
          type = "password" 
          onChange = {(event) => { setPw(event.target.value); console.log(pw);}} 
          placeholder = "PW를 입력해주세요."
          required />
      </UserPageBox>
      <Button onClick = {loginHandler} >로그인하기</Button>
    </UserFormWrap>
  )
}

export const UserFormWrap = styled.div`
  margin-top: 100px;
  display : flex;
  flex-direction: column;
`
export const UserPageBox = styled.div`
  width : 500px;
  display : flex;
  flex-direction: column;
`
export const UserTitle = styled.div`

`
export const InputBox = styled.input`
&::placeholder {
  color : grey;
}
`
export const Button = styled.button`
  width : 500px;
`
export default Login;