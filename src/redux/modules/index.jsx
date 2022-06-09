import { combineReducers } from "redux";

/* Reducers */
import postReducer from './postReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers( { postReducer, userReducer } );

export default rootReducer;