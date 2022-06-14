import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

/* Style */
import './App.css';

/* Pages */
import Home from './Pages/Home';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import Post from './Pages/Post';
import Update from './Pages/Update';
import Detail from './Pages/Detail';

/* import Components */
import Header from './Components/Header';
import HeaderIsLogin from './Components/HeaderisLogin'
import Test from './Pages/Test';
import MainStyle from './Components/MainStyle';
/* import Pages */

/* Reducer */
import { Routes, Route, useNavigate } from 'react-router-dom';
import { loginCheckDB, logout } from './redux/modules/userReducer';
import { useDispatch, useSelector } from 'react-redux';
import { getCookie, deleteCookie } from './Shared/Cookie';
import { loadPostDB } from './redux/modules/postReducer';
/* Router setup */

function App() {

  const dispatch = useDispatch();
  const accessToken = getCookie('token');
  
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(loginCheckDB(accessToken));
    dispatch(loadPostDB(accessToken));
  }, [dispatch, accessToken]);

  const userInfo = useSelector((state) => state.userReducer);
  const postData = useSelector((state)=>state.postReducer.list)
  console.log(userInfo); // nickname, userId
  console.log(postData)

  const userNick = userInfo.nickname;
  const userId = userInfo.username;
  const login = userInfo.login;

  const logoutHandler = () => {
    deleteCookie('token');
    dispatch(logout());
    alert('로그아웃 되었습니다!');
    // navigate('/');
  };

  return (
    <>
    {/* 로그인 여부에 따른 헤더 변경 */}
    { accessToken ? <HeaderIsLogin userNick = {userNick} userID = {userId} logoutHandler = {logoutHandler}/> : <Header/>}
    {/* <Test></Test>
    <MainStyle></MainStyle> */}
    <Routes>
    <Route path="/" element = { <Home login={login}/> } />
        <Route path="/signup" element = { <SignUp /> } />
        <Route path="/login" element = { <Login /> } />
        <Route path="/detail/update/:postId" element = { <Update /> } />
        <Route path="/post" element = { <Post username={userId}/> } />
        <Route path="/detail/:postId" element = { <Detail /> } />
    </Routes>
    </>
  );
}

export default App;
