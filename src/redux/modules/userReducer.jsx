import axios from 'axios';
import Login from '../../Pages/Login';

/* Sign-up, Login-Logout */

/* Initial State */
const InitUserState = {
  list : [],
  login : false,
  loading : false,
  error : null
}

/* ACTION TYPE */
// [ SERVER ]
const SERVER_REQ = 'userReducer/SERVER_REQ';
const REQ_ERROR = 'userReducer/REQ_ERROR';
const SIGN_UP = 'userReducer/SIGN_UP';
const LOGIN = 'userReducer/LOGIN';

// [ LOGIN  & SIGN-UP]
export const signUp = (paylaod) => ({ type : SIGN_UP, paylaod });
export const login = (payload) => ({ type : LOGIN, payload });

/* ACTION FUNCTION */
// [ SERVER ]
export const serverRuqest = (payload) => ({ type : SERVER_REQ, payload });
export const requestError = (payload) => ({ type : REQ_ERROR, payload });

/* THUNK */
const signUpDB = (payload) => {   // payload : { userId : ###, password : ###, nickName : ###}
  return async function(dispatch, getState) {
    dispatch(serverRuqest(true));
  try {
    const data = await axios({
      method : 'post',
      url : 'api/user/signup',
      data : {
        userId : payload.id,
        password : payload.pw,
        nickname : payload.nickName
      }
    })
    console.log(data);
    alert('회원가입 성공!')
    // navigate
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(requestError(false));
  }
 }};


/* REDUCER */
export default function userReducer( state = InitUserState, action ) {
  switch (action.type) {
    case SERVER_REQ :
      return { ...state, loading : action.payload };
      case REQ_ERROR :
        return { ...state, error : action.payload };
    default :
      return state;
  }
}