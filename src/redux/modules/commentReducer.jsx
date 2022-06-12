/* Posting Reducer */

import axios from "axios";

/* INIT */
const initComment = {
  list : [],
  loading : false,
  error : null
}

/* ACTION TYPE */
// [ SERVER REQ ]
const GET_REQ = 'commentReducer/GET_REQ';
const REQ_ERROR = 'commentReducer/REQ_ERROR';

// [ CRUD ]
const LOAD_COMMENT = 'commentReducer/LOAD_COMMENT';
const ADD_COMMENT = 'commentReducer/ADD_COMMENT';
const DEL_COMMENT = 'commentReducer/DEL_COMMENT';
const UPDATE_COMMENT = 'commentReducer/UPDATE_COMMENT';

/* ACTION FUNC */
export const getRequest = (payload) => {
  return { type : GET_REQ, payload }
};

export const reqError = (payload) => {
  return { type : REQ_ERROR, payload }
}

const laodComment = (payload) => {
  return { type : LOAD_COMMENT, payload }
};

const addComment = (payload) => {
  return { type : ADD_COMMENT, payload}
};

const delComment = (payload) => {
  return { type : DEL_COMMENT, payload }
};

const updateComment = (payload) => {
  return { type : UPDATE_COMMENT, payload }
};

/* THUNK */
export const loadCommentDB = (payload) => {
  // console.log(payload)
  // payload : { token : #### , postID : #### }
  return async function(dispatch) {
    dispatch(getRequest(true));
    try {
      // console.log(payload.token);
      const commentData = await axios({
        method : 'get',
        url : 'http://3.39.25.179:8080/api/comment/payload.postId',
        headers : {
          Authorization : `Bearer ${payload.token}`
        }
      })
      // console.log(commentData);
      dispatch(laodComment(commentData.data));
    } catch (error) {
      console.log('댓글 저장 실패', error);
      dispatch(reqError(error));
      alert('댓글 작성 실패!')
    } finally {
      dispatch(getRequest(false));
    }
}}

  /* payload : {
     token : #### ,
     post : {
      username : ####,
      nickname : ####,
      comment : ####,
      postId : ####
     }}
  */

export const addCommentDB = (payload) => {
  // console.log(payload)
  return async function (dispatch) {
    dispatch(getRequest(true));
  try {
    console.log(payload.token);
    const addData = await axios({
      method : 'post',
      url : 'http://3.39.25.179:8080/api/comment/payload.post.postId',
      data : {
        username : payload.post.username,
        nickname : payload.post.nickname,
        comment : payload.post.comment
      },
      headers : {
        Authorization : `Bearer ${payload.token}`
      }
    })
    console.log(addData);
    dispatch(addComment(addData.data));
    alert('댓글 작성이 완료되었습니다!');
  } catch (error) {
    console.log('댓글 작성 실패', error);
    dispatch(reqError(error));
  } finally {
    dispatch(getRequest(true));
  }
};
}

/* payload : { 
    token : ####, 
    commentId : ####
  }
*/

export const delCommentDB = (payload) => {
  return async function (dispatch) {
    dispatch(getRequest(true));
    try {
      console.log(payload);
      const delData = await axios({
        method : 'delete',
        url : 'http://3.39.25.179:8080/api/comment/:payload.commentId',
        headers : {
          Authorization : `Bearer ${payload.token}`
        }
      })
      // delData.data = { commentId : #### }
      dispatch(delComment(delData.data));
    } catch ( error )  {
      console.log('댓글 삭제 실패', error);
      dispatch(reqError(error));
    } finally {
      dispatch(getRequest(false));
    }
  }
}

export const updateCommentDB = (payload) => {
  return async function(dispatch, getState) {
    dispatch(getRequest(true));
  try {
    console.log(payload);
    const updateData = await axios({
      method : 'put',
      url : 'http://3.39.25.179:8080/api/comment/:payload.commentId',
      data : {
        comment : payload.comment
      },
      headers : {
        Authorization : `Bearer ${payload.token}`
      }
    })
    dispatch(updateComment(updateData.data));
    alert('댓글 수정이 완료되었습니다!');
  } catch (error) {
    console.log('댓글 수정 실패!', error);
    dispatch(reqError(error));
  } finally {
    dispatch(getRequest(false));
  }
 }}; 
/* REDUCER */
export default function commentReducer( state = initComment, action = {}) {
  console.log(action);
  switch (action.type) {
    case LOAD_COMMENT :
      return { ...state, list : action.payload }
    case ADD_COMMENT :
      return { ...state, list : [...state.list, action.payload] }
    case DEL_COMMENT :
      return {  // payload => { commentId : #### }
        ...state, list : state.list.filter((value) => {
          return ( value.commentId !== action.payload.commentId );
        })
      };
    case UPDATE_COMMENT :
      const updateData = state.list.map((value) => {
        return value.commentId === action.payload.commentId ? action.payload : value;
      });
      return { ...state, list : updateData }
    case GET_REQ :
      return { ...state, loading : action.payload };
    case REQ_ERROR :
      return { ...state, error : action.payload };
      default :
      return state;
  }
}