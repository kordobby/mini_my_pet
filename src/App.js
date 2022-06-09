import React from 'react';

/* Style */
import './App.css';

/* Pages */
import Home from './Pages/Home';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import Post from './Pages/Post';
import Update from './Pages/Update';

/* import Pages */

/* Reducer */
import { Routes, Route } from 'react-router-dom';

/* Router setup */

function App() {


  return (
    <>
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
