import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { setCookie } from '../../Shared/Cookie';
/* Sign-up, Login-Logout */

/* Initial State */
const InitUserState = {
  username : "",
  nickname : "",
  login : false,
  loading : false,
  error : null,
  idCheck : false
}

/* ACTION TYPE */
// [ SERVER ]
const SERVER_REQ = 'userReducer/SERVER_REQ';
const REQ_SUCCESS = 'userReducer/REQ_SUCCESS';
const REQ_ERROR = 'userReducer/REQ_ERROR';

// [ LOGIN  & SIGN-UP ]
// const SIGN_UP = 'userReducer/SIGN_UP';
const LOGIN = 'userReducer/LOGIN';
const CHECK_ID = 'userReducer/CHECK_ID';
const LOGIN_CHECK = 'userReducer/LOGIN_CHECK';

/* ACTION FUNCTION */
// [ SERVER ]
const serverRequest = (payload) => ({ type : SERVER_REQ, payload });
const requestSuccess = (payload) => ({ type : REQ_SUCCESS, payload })
const requestError = (payload) => ({ type : REQ_ERROR, payload });

// [ LOGIN  & SIGN-UP ]
// const signUp = (paylaod) => ({ type : SIGN_UP, paylaod });
const login = (payload) => ({ type : LOGIN, payload });
const checkId = (payload) => ({ type : CHECK_ID, payload });
const loginCheck = (payload) => ({ type : LOGIN_CHECK, payload });

/* THUNK */
// KAKAO LOGIN
export const kakaoLoginDB = (code) => {
  return async function(dispatch) {
    dispatch(serverRequest(true));
  try {
    const kakaoLogin = await axios({
      method : 'get',
      url : `http://3.39.25.179:8080/api/kakao/callback?code=${code}`
    })
    console.log(kakaoLogin);
    /* Token - Cookie */
    const accessToken =  kakaoLogin.data.user.token;  
    setCookie('token', accessToken);
    // 유저 닉네임 & ID 저장하는 리듀서 만들어야함
    dispatch(loginCheck('hello')) 
    alert('로그인 성공!')
  }
   catch (error) {
     console.log('카카오 로그인 실패', error)
   } 
    finally {
      dispatch(serverRequest(false));
    }
}};


// [ SIGN-UP : checkId ]
export const checkIdDB = (payload) => {
  console.log(payload) // username : #### 확인!
  return async function(dispatch) {
    dispatch(serverRequest(true));
  try {
    const idCheck = await axios({
      method : 'post',
      url : 'http://3.39.25.179:8080/api/signup/checkid',
      data : {
        username : payload.username
      }
    })
    
    console.log(idCheck.data);
    if ( idCheck.data === true ) {
      dispatch(checkId(idCheck.data));
      alert("사용가능한 ID입니다!")
    } else {
      dispatch(checkId(idCheck.data));
      alert("이미 가입되어있는 ID입니다!")
    }
    }
  catch (error) {
  } finally {
    dispatch(serverRequest(false));
  }
}};

// [ SIGN-UP ]
export const signUpDB = (payload) => {   // payload : { username : ###, password : ###, nickName : ###}
  console.log(payload); 
  return async function(dispatch, getState) {
  try {
    const join = await axios({
      method : 'post',
      url : 'http://3.39.25.179:8080/api/signup',
      data : {
        username : payload.username,
        password : payload.password,
        nickname : payload.nickname
      }
    })
    console.log(join); 
    if ( join.data === true ) {
      alert('회원가입 성공!');
    }
  } catch (error) { 
    console.log(error);
    alert('회원가입에 실패했습니다.')
  } finally {
    dispatch(serverRequest(false));             // server request 종료
  }
 }};

// [ LOGIN ]
export const loginDB = (payload) => {    
  return async function(dispatch) {
    dispatch(serverRequest(true));
  try {
    const login = await axios({
      method : 'post',
      url : 'http://3.39.25.179:8080/api/login',
      data : {
        username : payload.username, 
        password : payload.password   
      }
    })
      const accessToken =  login.headers.authorization.split(" ")[1];  
      setCookie('token', accessToken);        
      dispatch(requestSuccess(true));     
      alert('로그인 성공!')    
  } catch ( error ) {
    dispatch(requestError(error));
    alert('아이디어와 비밀번호를 다시 확인해주세요.');
  } finally {
    dispatch(serverRequest(false));             // server request 종료
  } 
}};

// [ SIGN-UP : checkId ]
export const loginCheckDB = (token) => {
  return async function(dispatch, getState) {
    // #1. 서버 요청 보내기 => loading = true;
    dispatch(serverRequest(true));
  try {
    // #2. 서버 로그인 요청
    // response (success) => result { nickname : #### , ID : #### }
    console.log(token);
    const loginState = await axios({
      method : 'get',
      url : 'http://3.39.25.179:8080/api/auth',
      headers : {
        Authorization : `Bearer ${token}`
      }
    })
      console.log(loginState);
      dispatch(loginCheck(loginState.data));   // response (success) => result { nickname : #### , ID : #### }
      dispatch(requestSuccess(true));          // login state 값을 true로 변경
  } catch ( error ) {
    console.log( "로그인 확인 실패", error );
    dispatch(requestError(error));
  } finally {
    dispatch(serverRequest(false));             // server request 종료
  } 
}};

/* REDUCER */
export default function userReducer( state = InitUserState, action ) {
  console.log(action);
  switch (action.type) {
      case SERVER_REQ :
        return { ...state, loading : action.payload };
      case REQ_SUCCESS :
        return { ...state, login : action.payload, error : null };  // if login success => login : true
      case REQ_ERROR :
        return { ...state, login : false, error : action.payload };  // if login success => login : false
      case CHECK_ID :
        return { ...state, idCheck : action.payload }; // if success => idCheck : true => useSelector 
      case LOGIN_CHECK :
        return { ...state, username : action.payload.username, nickname : action.payload.nickname };
    default :
      return state;
  }
}