/* 게시물 등록 page */
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addPostDB, delPostDB } from "../redux/modules/postReducer";
import { getCookie } from "../Shared/Cookie";
import { useParams } from "react-router-dom"
import { InputBox, UserFormWrap, UserPageBox, UserTitle, LoginBtnWrap, StateHeader, StateHeaderText } from './Login';
import { Button, imgUploadLabel } from '../elem/Button';
import thumbnail from '../img/thumbnail.png';


// [ Firebase ]
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../firebase-config";


const Post = ({username}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const text_ref = useRef(null);
  const img_ref = useRef(null);
  
  const onImgLoaded = async (e) => {
    const uploadImg = await uploadBytes(
      ref(storage, `images/${e.target.files[0].name}`),
      e.target.files[0]);
    const img_url = await getDownloadURL(uploadImg.ref);
    img_ref.current = { url: img_url}
    console.log(img_ref.current.url);
    setLoadedImg(img_ref?.current?.url)
  }

  const [loadedImg, setLoadedImg] = useState(thumbnail)
  
  const addPostHandler = ()=> {
    setTimeout(() => {
      dispatch(addPostDB({
        img: img_ref.current.url,
        text: text_ref.current?.value,
        username: username,
        token: getCookie('token'),
      }))
      navigate(-1);
    }, 3000)
};

  return (
    <>
      <input ref={text_ref}></input>
      <UserFormWrap>
        <UserPageBox style = {{ height : '600px'}}>
          <UserTitle>Post!</UserTitle>
          {/* <InputBox 
            type = "text"
            ref={text_ref}
            placeholder = "이미지를 선택해주세요!"
            required />       
          <label 
          for="postImg"
          style={{
          marginTop : '6px',
          marginBottom : '10px',
          marginRight : '10px',
          border: "solid"
          }}>이미지 업로드</label> */}
          <input 
          ref={img_ref} 
          type='file' 
          className="imgInput" 
          id='postImg' 
          accept="image/*" 
          name="file" 
          onChange={onImgLoaded}/><br/>
          <div style={{
            width: "15rem",
            height: "15rem",
            border: "solid #ddd 1px",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            textAlign: "center"
          }}>
          <img src={loadedImg}
          style={{
            width: "15rem",
            height: "15rem",
          }}/>
          </div><br/><br/><br/>
          <InputBox 
            type = "text"
            ref={text_ref}
            placeholder = "50자 내로 작성해주세요!"
            required /> 
        <LoginBtnWrap
          style = {{
            marginTop : '20px',
            flexDirection : 'row',
            alignContent : 'center',
            justifyContent : 'flex-end',
            width : '100%'
          }}>
        <Button
            onClick={()=>(addPostHandler())}
            style = {{
              marginTop : '6px',
              marginBottom : '10px',
              marginRight : '10px'
            }}>Post</Button>
        <Button
            onClick={()=>(navigate(-1))}
            style = {{
              marginTop : '6px',
              marginBottom : '10px'
            }}>Cancel</Button>
        </LoginBtnWrap>
        </UserPageBox>
      </UserFormWrap>
    </>
  )
}

export default Post;