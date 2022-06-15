/* CRUD reducer part */
import axios from "axios";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../firebase-config";

const MOCK_SERVER = "http://localhost:4000/posts"
const REAL_SERVER = "http://3.39.25.179:8080/api"
// Init State
const initState = {
    list: [],
    loading: false,
    error: null,
    detail : null
}

//Action Type
//[ SERVER ]
const SERVER_REQ = 'postReducer/SERVER_REQ';
const REQ_SUCCESS = 'postReducer/REQ_SUCCESS';
const REQ_ERROR = 'postReducer/REQ_ERROR';

// [ FIREBASE ]
const ADD_IMG = 'postReducer/ADD_IMG';
const LOAD_IMG = 'postReducer/LOAD_IMG';
const DEL_IMG = 'postReducer/DEL_IMG';

// [ POST ]
const ADD_POST = 'postReducer/ADD_POST';
const LOAD_POST = 'postReducer/LOAD_POST';
const UPDATE_POST = 'postReducer/UPDATE_POST';
const DELETE_POST = 'postReducer/DELETE_POST';

// [ DETAIL]
const LOAD_DETAIL = 'postReducer/LOAD_DETAIL';

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
function loadDetail (payload) {
    return {type : LOAD_DETAIL, payload}
}

//middelwares
export const addPostDB = (payload) => {
    return async function(dispatch){
        dispatch(serverRequest(true));
        try {
            const post_data = await axios.post(`${REAL_SERVER}/post`, {
                img: payload.img,
                text: payload.text,
                username: payload.username},
                {headers: {
                    Authorization : `Bearer ${payload.token}`
                }});
                console.log(post_data.data)
            dispatch(addPost(post_data.data));}
        catch (error) {
            console.log(error)
            alert("통신 에러 도망가세요 addPost")}
        finally {
            dispatch(serverRequest(false))
}}}

export const loadPostDB = (token)=> {
    return async function(dispatch){
        console.log("start-load")
        dispatch(serverRequest(true));  
        try {
            const loaded_data = await axios.get(`${REAL_SERVER}/main`, {
                headers: {
                    Authorization : `Bearer ${token}`
                }});
            dispatch(loadPost(loaded_data.data));
            console.log(loaded_data);
        }
        catch ( error ) {
            console.log("데이터 Load 실패", error)
                dispatch(requestError(error));}
        finally {
        console.log("end-load")
        dispatch(serverRequest(false));
}}}


export const updatePostDB = (payload)=> {
    return async function(dispatch){
        dispatch(serverRequest(true));
        console.log(payload)
        console.log(`${REAL_SERVER}/detail/update/${payload.postId}`)
        try {
            const updated_data = await axios.put(`${REAL_SERVER}/detail/update/${payload.postId}`,{
                text: payload.text},
                {headers: {
                    Authorization : `Bearer ${payload.token}`
                }}) 
                console.log("업데이트 된 데이터", updated_data);
            dispatch(updatePost(updated_data.data));}
        catch ( error ) {
            console.log("데이터 upload 실패", error)
            dispatch(requestError(error));}
        finally {
            dispatch(serverRequest(false));
}}}

export const delPostDB = (payload)=> {
    return async function(dispatch, getState){
        dispatch(serverRequest(true));
        try {
            const delPostId = await axios.delete(`${REAL_SERVER}/detail/${payload.postId}`, {
                headers: {
                    Authorization : `Bearer ${payload.token}`                
            }});
            dispatch(deletePost(delPostId.data));
        }
        catch ( error ) {
            console.log("데이터 삭제 실패", error)
                dispatch(requestError(error));}
        finally {
        dispatch(serverRequest(false));
}}}

export const loadDetailDB = (payload) => {
    return async function(dispatch) {
        dispatch(serverRequest(true));
        try {
            const detailData = await axios.get(`${REAL_SERVER}/detail/${payload.postId}`, {
                headers: {
                    Authorization : `Bearer ${payload.token}`         
            }
        });
        console.log(detailData.data);
        dispatch(loadDetail(detailData.data))
        } catch (error) {
            console.log('상세 페이지 로드 실패', error)
            dispatch(requestError(error));
        } finally {
            dispatch(serverRequest(false));
        }
}}




// REDUCER
export default function postReducer(state=initState, action={}){
    switch (action.type){
        case ADD_POST : 
            return { ...state, list: [...state.list, action.payload] };
        case LOAD_POST : 
            return { ...state, list: action.payload};
        case DELETE_POST :
            console.log(action.payload);
            return { ...state, list : state.list.filter((value) => {
                return ( value.postId !== Number(action.payload) )
            }) };
        case UPDATE_POST :
            return {...state, detail: action.payload, list:
                state.list.map((value, index)=>{
                    return index === Number(action.payload.postId) ? action.payload : value})
                }
            // return {...state, detail: action.payload}
        case LOAD_DETAIL :
            return { ...state, detail: action.payload};
        case SERVER_REQ :
            return { ...state, loading: action.payload };
        // case REQ_SUCCESS :
        //     return {...state}  // 이것도 확인 필요
        case REQ_ERROR :
            return { ...state, error : action.payload };
        default:
            return state;
}}