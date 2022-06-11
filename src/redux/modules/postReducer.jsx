/* CRUD reducer part */
import axios from "axios";
import { RESP } from "./mock_response";

// Init State
const initState = {
    result: [{
        img:"randomImg for test",
        nickname:"Nicks",
        postId:"asdfasdfsadfasadf",
        userId:"Peter",
        text:"this is a text for post",
        postTime:"Date"
        }]
    // list: [],
    // is_loading: false,
}

//Action Type
const ADD_POST = 'postReducer/ADD_POST';
const LOAD_POST = 'postReducer/LOAD_POST';
const UPDATE_POST = 'postReducer/UPDATE_POST';
const DELETE_POST = 'postReducer/DELETE_POST';

//Action Creator 
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
// export const addPostDB = (payload) => {
//     return async function(dispatch){
//         const post_data = await axios.post('/api/post', {
//             img: payload.img,
//             text: payload.text,
//             userId: payload.userId,
//             postTime: payload.postTime
//         });
//         dispatch(addPost(post_data));
//     }
// }
export const addPostDB = (payload) => {
    return async function(dispatch){
        const post_data = await axios.post('/api/post', {
            img: payload.img,
            text: payload.text,
            userId: payload.userId,
            postTime: payload.postTime
        });
        dispatch(addPost(post_data));
    }
}

export const loadPostDB = ()=> {
    return async function(dispatch){
        const serverUrl = "EC2IP:8000" // 수정 필요
        // const post_data = await axios.get(`${serverUrl}/api/main`);
        const post_data = RESP.MAIN;
        console.log(RESP.MAIN)
        dispatch(loadPost(post_data))
    }
}


export default function postReducer(state=initState, action={}){
    switch (action.type){
        case ADD_POST: {
            return {...state, list: action.payload}
        } case LOAD_POST: {
            return {list: action.payload}
        } default:
            return state;
    }
}