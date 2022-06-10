import React from 'react';

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
import HeaderIsLogin from './Components/HeaderIsLogin';

/* import Pages */

/* Reducer */
import { Routes, Route } from 'react-router-dom';

/* Router setup */

function App() {


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
    </>
  );
}

export default App;
