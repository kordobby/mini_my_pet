/* 홈(메인) page */

import Main from "../Components/Main";
import Test from "./Test";
import { AddPostBtn } from "../elem/AddPostBtn";
import { useNavigate } from "react-router-dom";

const Home = ( {login} ) => {
const navigate = useNavigate();
  return (
    <>
      <Test/>
      {/* { login ? (
        <> */}
          <Main/>
          <AddPostBtn onClick={()=>navigate('/post')}>+</AddPostBtn>
        {/* </>
      ) : ""} */}
    </>
  )
}

export default Home;