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

/* import Pages */

/* Reducer */
import { Routes, Route } from 'react-router-dom';
import { loginCheckDB } from './redux/modules/userReducer';
import { useDispatch, useSelector } from 'react-redux';
import { getCookie } from './Shared/Cookie';
/* Router setup */

function App() {

  const dispatch = useDispatch();
  const accessToken = getCookie('accessToken');

  useEffect(() => {
    dispatch(loginCheckDB(accessToken));
  }, [dispatch, accessToken]);

  const userInfo = useSelector((state) => state.userReducer);
  console.log(userInfo); // nickname, userId

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
        <Route path="/detail" element = { <Detail/> } />
    </Routes>
    </>
  );
}

export default App;
