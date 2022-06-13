/* 게시물 등록 page */
import React, { useState } from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addPostDB, delPostDB } from "../redux/modules/postReducer";
import { getCookie } from "../Shared/Cookie";
import { useParams } from "react-router-dom"



const Post = ({username}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const text_ref = useRef(null);
  const img_ref = useRef(null);
  let IMG_URL = "";

  // image 파트는 일단 URL "문자열"로 주고받기 --> FB에 Storage 가능한지 확인
  const onImgLoaded = (e) => {
    const img = e.target.files;
    IMG_URL = img[0].name;
    console.log("이미지 URL",IMG_URL);
  }

  const addPostHandler = ()=> {
      dispatch(addPostDB({
        img: IMG_URL,
        text: text_ref.current?.value,
        username: username,
        token: getCookie('token')
      }))
      navigate(-1);
    }

  return (
    <>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <span>Post</span><br/>
      <input ref={img_ref} type='file' className="imgInput" id='postImg' accept="image/*" name="file" onChange={onImgLoaded} required/>  
      {/* <div className="thumbnail">썸네일</div>  */}
      <input ref={text_ref}></input>
      <button onClick={addPostHandler}>Submit</button><br/>
    </>
  )
}

export default Post;