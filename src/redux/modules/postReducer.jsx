/* CRUD reducer part */

// Init State
const initState = {
    ok:true,
    result: [{
        img:"randomImg for test",
        nickname:"Nicks",
        postId:"asdfasdfsadfas",
        userId:"Peterk"
    }],
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