import React, { useEffect } from 'react';

/* Style */
import './App.css';

/* Pages */
import Home from './Pages/Home';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import Post from './Pages/Post';
import Update from './Pages/Update';

/* import Components */
import Header from './Components/Header';
import HeaderIsLogin from './Components/HeaderisLogin'
/* import Pages */

/* Reducer */
import { Routes, Route } from 'react-router-dom';
import { loginCheckDB, logoutDB } from './redux/modules/userReducer';
import { useDispatch, useSelector } from 'react-redux';
import { getCookie, removeCookie } from './Shared/Cookie';
/* Router setup */

function App() {

  const dispatch = useDispatch();
  const accessToken = getCookie('token');

  useEffect(() => {
    dispatch(loginCheckDB(accessToken));
  }, [dispatch, accessToken]);

  const userInfo = useSelector((state) => state.userReducer);
  console.log(userInfo); // nickname, userId

  const logOutHandler = (accessToken) => {
    dispatch(logoutDB(accessToken));
    removeCookie()
  };

  return (
    <>
    {/* 로그인 여부에 따른 헤더 변경 */}
    <Header/>
    <Routes>
    <Route path="/" element = { <Home /> } />
        <Route path="/signup" element = { <SignUp /> } />
        <Route path="/login" element = { <Login /> } />
        <Route path="/update" element = { <Update /> } />
        <Route path="/post" element = { <Post/> } />
    </Routes>
    <button style = {{ marginTop : '150px' }} onClick = {logOutHandler}>logout</button>
    </>
  );
}

export default App;
