import { combineReducers } from "redux";

/* Reducers */
import postReducer from './postReducer';
import userReducer from './userReducer';
import commentReducer from "./commentReducer";
const rootReducer = combineReducers( { postReducer, userReducer, commentReducer } );

export default rootReducer;