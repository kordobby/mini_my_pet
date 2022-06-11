/* 게시물 등록 page */
import axios from "axios";
import React, { useState } from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addPostDB } from "../redux/modules/postReducer";
import { getCookie } from "../Shared/Cookie";



const Post = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const text_ref = useRef(null);
  const img_ref = useRef(null);
  let IMG_URL = "";

  // image 파트는 일단 URL "문자열"로 주고받기
  const onImgLoaded = (e) => {
    const img = e.target.files;
    IMG_URL = img[0].name;
    console.log("이미지 URL",IMG_URL);
  }

  const addPostHandler = ()=> {
    setTimeout(()=>{ 
      dispatch(addPostDB({
        img: IMG_URL,
        text: text_ref.current?.value,
        // username: getCookie()  // username 은 Prop로 받아와서 활용 예정
      }))
    })
  }

  return (
    <>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <span>Post</span><br/>
      <input ref={img_ref} type='file' className="imgInput" id='postImg' accept="image/*" name="file" onChange={onImgLoaded}/>  
      {/* <div className="thumbnail">썸네일</div>  */}
      <input ref={text_ref}></input>
      <button onClick={addPostHandler}>Submit</button>
    </>
  )
}

export default Post;