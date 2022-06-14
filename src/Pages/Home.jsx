/* 홈(메인) page */

import MainStyle from "../Components/MainStyle";
import Test from "./Test";
import { AddPostBtn } from "../elem/AddPostBtn";
import { useNavigate } from "react-router-dom";

const Home = ( {login} ) => {
const navigate = useNavigate();
  return (
    <>
      <Test/>
      { login ? (
        <>
          <MainStyle/>
          <AddPostBtn onClick={()=>navigate('/post')}>+</AddPostBtn>
        </>
      ) : ""}
    </>
  )
}

export default Home;