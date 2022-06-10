import axios from 'axios';
import { setCookie } from '../../Shared/Cookie';
/* Sign-up, Login-Logout */

/* Initial State */
const InitUserState = {
  list : [],
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
const SIGN_UP = 'userReducer/SIGN_UP';
const LOGIN = 'userReducer/LOGIN';
const CHECK_ID = 'userReducer/CHECK_ID';

/* ACTION FUNCTION */
// [ SERVER ]
export const serverRequest = (payload) => ({ type : SERVER_REQ, payload });
export const requestSuccess = (payload) => ({ type : REQ_SUCCESS, payload })
export const requestError = (payload) => ({ type : REQ_ERROR, payload });

// [ LOGIN  & SIGN-UP ]
export const signUp = (paylaod) => ({ type : SIGN_UP, paylaod });
export const login = (payload) => ({ type : LOGIN, payload });
export const checkId = (payload) => ({ type : CHECK_ID, payload })

/* THUNK */
// [ SIGN-UP : checkId ]
export const checkIdDB = (payload) => {
  console.log(payload) // userId : #### 확인!
  return async function(dispatch) {
    dispatch(serverRequest(true));
  try {
    const idCheck = await axios({
      method : 'get',
      url : '/api/signup/checkid',
      data : {
        userId : payload.id
      }
    })
    console.log(idCheck);
    dispatch(checkId(idCheck)); // idCheck : true or false, 굳이 필요할까?
    if ( idCheck === true ) {
      alert("사용가능한 ID입니다!")
    } else {
      alert("이미 가입되어있는 ID입니다!")
    }
    }
  catch (error) {
    alert('다시 입력해주세요!')
  } finally {
    dispatch(serverRequest(false));
  }
}};

// [ SIGN-UP ]
export const signUpDB = (payload) => {   // payload : { userId : ###, password : ###, nickName : ###}
  console.log(payload); 
  return async function(dispatch, getState, navigate) {
    // #1. 서버 요청 보내기 => loading = true;
    dispatch(serverRequest(true));
  try {
    // #2. 서버 회원가입 요청 : userId, password 보내기
    // response (success) => result { result : true or false }
    const join = await axios({
      method : 'post',
      url : 'api/user/signup',
      data : {
        userId : payload.id,
        password : payload.pw,
        nickname : payload.nickName
      }
    })
    // #3-1 회원가입 성공
      // 1) requestSuccess 시 로그인 알림 띄우기 (+)
      // 2) navigate to Login page
    console.log(join); // data : { result : true } or data : { result : false }
    if ( join.data.result === true ) {
      alert('회원가입 성공!');
      navigate('/login');
    }
  } catch (error) { // error 시 돌아갈 코드
    console.log(error);
    alert('회원가입에 실패했습니다.')
    navigate('/signup');
  } finally {
    dispatch(serverRequest(false));             // server request 종료
  }
 }};

// [ LOGIN ]
export const loginDB = (payload) => {    
  // #1. input 창에서 받아온 value => payload = { id : ####, pw : #### } (확인!)
  console.log(payload); 
  return async function(dispatch, getState, navigate) {
    // #2. 서버 요청 보내기 => loading = true;
    dispatch(serverRequest(true));
  try {
    // #3. 서버 로그인 요청 : userId, password 보내기
    // response (success) => result { result : true or false }
    const login = await axios({
      method : 'post',
      url : 'api/login',
      data : {
        userId : payload.id,   // id : ####
        password : payload.pw   // pw : ####
      }
    })
    console.log(login);  // 여기서 data가 어떻게 넘어오려나?
    // #4-1 로그인 성공
      // 1) 토큰 받아서 쿠키에 넣기 (+)
      // 2) requestSuccess 시 login state true 변경 (+)
      // 3) 로그인 알림 띄우기 (+)
      // 4) navigate to Home
      const accessToken =  login.data.token;   // token 받기
      console.log(accessToken);
      setCookie('token', accessToken);         // token 쿠키 저장
      dispatch(requestSuccess(true));          // login state 값을 true로 변경
      alert('어서오세요!')
  } catch ( error ) {
    console.log( error );
    dispatch(requestError(error));
    alert('아이디어와 비밀번호를 다시 확인해주세요.');
  } finally {
    dispatch(serverRequest(false));             // server request 종료
  } 
}};


/* REDUCER */
export default function userReducer( state = InitUserState, action ) {
  switch (action.type) {
      case SERVER_REQ :
        return { ...state, loading : action.payload };
      case REQ_SUCCESS :
        return { ...state, login : action.payload };  // if login success => login : true
      case REQ_ERROR :
        return { ...state, error : action.payload };  // if login success => login : false
      case CHECK_ID :
        return { ...state, idCheck : action.payload }; // if success => idCheck : true => useSelector 
    default :
      return state;
  }
}