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
import AboutUs from './Pages/AboutUs';

/* import Components */
import Header from './Components/Header';
import HeaderIsLogin from './Components/HeaderisLogin'
import AboutUsBtn from './elem/AboutUsBtn';

/* Reducer */
import { Routes, Route, useNavigate } from 'react-router-dom';
import { logout } from './redux/modules/userReducer';
import { useDispatch, useSelector } from 'react-redux';
import { getCookie, deleteCookie } from './Shared/Cookie';
import KakaoRedirect from './Pages/KakaoRedirect';
import ScrollTopBtn from './elem/ScrollTopBtn';
/* Router setup */
import axios from 'axios';
import { useQuery, useQueryClient } from 'react-query';
import { loginCheckDB } from './redux/modules/userReducer';
function App() {

  const dispatch = useDispatch();
  const accessToken = getCookie('token');
  
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(loginCheckDB(accessToken));
  }, [dispatch, accessToken]);

    /* React-query : login Check request */
    // const fetcher = async () => {
    //   const user = await axios.get(`http://3.39.25.179:8080/api/auth`, {
    //     headers: {
    //         Authorization : `Bearer ${accessToken}`
    //     }});
    //   return user.data;
    // };

    // const { data, isLoading, error, isError } = useQuery("loginCheck", fetcher);
    // console.log(data);

  /* React-query prac */

  const userInfo = useSelector((state) => state?.userReducer);
  const postData = useSelector((state)=>state?.postReducer.list);

  const userNick = userInfo?.nickname;
  const userId = userInfo?.username;

  const logoutHandler = () => {
    deleteCookie('token');
    dispatch(logout());
    alert('로그아웃 되었습니다!');
    navigate('/');
  };

  return (
    <>
    {/* 로그인 여부에 따른 헤더 변경 */}
    { accessToken ? <HeaderIsLogin userNick = {userNick} userID = {userId} logoutHandler = {logoutHandler}/> : <Header/>}
    {/* <Test></Test>
    <MainStyle></MainStyle> */}
    <Routes>
    <Route path="/" element = { <Home/> } />
        <Route path="/signup" element = { <SignUp /> } />
        <Route path="/login" element = { <Login /> } />
        <Route path="/detail/update/:postId" element = { <Update /> } />
        <Route path="/post" element = { <Post username={userId}/> } />
        <Route path="/detail/:postId" element = { <Detail /> } />
        <Route path="/oauth/kakao/callback" element = {<KakaoRedirect/>} />
        <Route path="/aboutus" element = { <AboutUs /> }/>
    </Routes>
    <ScrollTopBtn/>
    <AboutUsBtn/>
    </>
  );
}

export default App;
