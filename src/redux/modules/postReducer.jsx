/* CRUD reducer part */
import axios from "axios";
// import { RESP } from "./mock_response";
import { setCookie } from "../../Shared/Cookie";

// Init State
const initState = {
    list: [
        // {
        //     img:"randomImg for test",
        //     nickname:"Nicks",
        //     postId:"1234",
        //     username:"Peter",
        //     text:"this is a text for post0",
        //     postTime:"Date"
        // },
        // {
        //     img:"randomImg for test",
        //     nickname:"Nicks",
        //     postId:"asdfasdfsadfasadf",
        //     username:"Peter",
        //     text:"this is a text for post1",
        //     postTime:"Date"
        // },
        // {
        //     img:"randomImg for test",
        //     nickname:"Nicks",
        //     postId:"dddff",
        //     username:"Peter",
        //     text:"this is a text for post2",
        //     postTime:"Date"
        // }
    ],
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
            const post_data = await axios.post('/api/post', {
                img: payload.img,
                text: payload.text,
                username: payload.username,
            }); //header 추가, token 작업 완료 후 추가 
            console.log(post_data);
            dispatch(addPost(post_data));
        } catch (error) {
            alert("통신 에러 도망가세요")
        } finally {
            dispatch(serverRequest(false))
        }
    }
}

export const loadPostDB = (token)=> {
    return async function(dispatch){
        dispatch(serverRequest(true));
        try {
        // const serverUrl = "EC2IP:8000" // 수정 필요
        const loaded_data = await axios.get(`http://localhost:4000/posts`, {
            headers: {
                Authorization : `Bearer ${token}`
            }});
            console.log(loaded_data)
        dispatch(loadPost(loaded_data))
    }   catch ( error ) {
        console.log("데이터 Load 실패", error)
            dispatch(requestError(error));
    }   finally {
        dispatch(serverRequest(false));
    }
}}

// REDUCER
export default function postReducer(state=initState, action={}){
    switch (action.type){
        case ADD_POST : 
            return { ...state, list: action.payload };
        case LOAD_POST : 
            return {list: action.payload}
        case SERVER_REQ :
            return { ...state, loading: action.payload };
        // case REQ_SUCCESS :
        //     return {...state}
        case REQ_ERROR :
            return { ...state, error : action.payload };
        default:
            return state;
    }
}