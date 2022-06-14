/* CRUD reducer part */
import axios from "axios";
// import { RESP } from "./mock_response";
const MOCK_SERVER = "http://3.39.25.179:8080/api"
// Init State
const initState = {
    list: [],
    loading: false,
    error: null
}

//Action Type
//[ SERVER ]
const SERVER_REQ = 'postReducer/SERVER_REQ';
const REQ_SUCCESS = 'postReducer/REQ_SUCCESS';
const REQ_ERROR = 'postReducer/REQ_ERROR';

// [ POST ]
const ADD_POST = 'postReducer/ADD_POST';
const LOAD_POST = 'postReducer/LOAD_POST';
const UPDATE_POST = 'postReducer/UPDATE_POST';
const DELETE_POST = 'postReducer/DELETE_POST';

//Action Creator 
// [SERVER]
const serverRequest = (payload) => ({ type : SERVER_REQ, payload });
const requestSuccess = (payload) => ({ type : REQ_SUCCESS, payload })
const requestError = (payload) => ({ type : REQ_ERROR, payload });

// [POST]
function addPost (payload) {
    return {type: ADD_POST, payload}
}
function loadPost (payload) {
    return {type: LOAD_POST, payload}
}
function updatePost (payload) {
    return {type: UPDATE_POST, payload}
}
function deletePost (payload) {
    return {type: DELETE_POST, payload}
}

//middelwares
export const addPostDB = (payload) => {
    console.log("AddPostDB 페이로드 내용: ",payload)
    return async function(dispatch){
        dispatch(serverRequest(true));
        try {
            const post_data = await axios.post("http://3.39.25.179:8080/api/post", {
                img: payload.img,
                text: payload.text,
                username: payload.username},
                {headers: {
                    Authorization : `Bearer ${payload.token}`
                } 
            });
            console.log("postData입닏", post_data);
            dispatch(addPost(post_data.data));
        } catch (error) {
            console.log(error)
            // alert("통신 에러 도망가세요 addPost")
        } finally {
            dispatch(serverRequest(false))
        }
    }
}

export const loadPostDB = (token)=> {
    return async function(dispatch){
        dispatch(serverRequest(true));  
        try {
            const loaded_data = await axios.get("http://3.39.25.179:8080/api/post", {
                headers: {
                    Authorization : `Bearer ${token}`
                }});
            dispatch(loadPost(loaded_data.data))
    }   catch ( error ) {
            console.log("데이터 Load 실패", error)
                dispatch(requestError(error));
    }   finally {
        dispatch(serverRequest(false));  
    }
}}

export const updatePostDB = (payload)=> {
    return async function(dispatch){
        dispatch(serverRequest(true));
        try {
            const updated_data = await axios.put(`/api/detail/update/${payload.postId}`, {
                text: payload.text,
                headers: {
                    Authorization : `Bearer ${payload.token}`
                }}); 
                console.log(updated_data);
            dispatch(updatePost(updated_data));
        } catch ( error ) {
            console.log("데이터 upload 실패", error)
            dispatch(requestError(error));
        } finally {
            dispatch(serverRequest(false));
        }
    }
}

export const delPostDB = (payload)=> {
    return async function(dispatch){
        dispatch(serverRequest(true));
        try {
            const delPostId = await axios.delete(`${MOCK_SERVER}/${payload.postId}`, {
                headers: {
                    Authorization : `Bearer ${payload.token}`                
            }});
            console.log(delPostId);
            dispatch(deletePost(delPostId))
    }   catch ( error ) {
            console.log("데이터 삭제 실패", error)
                dispatch(requestError(error));
    }   finally {
        dispatch(serverRequest(false));
    }
    }
}

// REDUCER
export default function postReducer(state=initState, action={}){
    console.log(action);
    switch (action.type){
        case ADD_POST : 
            return { ...state, list: [...state, action.payload] };
        case LOAD_POST : 
            return { ...state, list: action.payload}; // ...state가 필요할까?
        case DELETE_POST :
            return {...state, list: 
                state.list.filter((value)=> {
                    return (value.postId !== action.payload)})}
        case UPDATE_POST :
            return {...state, list: action.payload} //확인 필요...
        case SERVER_REQ :
            return { ...state, loading: action.payload };
        // case REQ_SUCCESS :
        //     return {...state}  // 이것도 확인 필요
        case REQ_ERROR :
            return { ...state, error : action.payload };
        default:
            return state;
    }
}