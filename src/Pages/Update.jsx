/* 수정 page */
<<<<<<< HEAD
import { useRef } from "react";
import { useDispatch } from "react-redux"
import { useNavigate, useParams } from "react-router-dom";
import { updatePostDB } from "../redux/modules/postReducer";
import { getCookie } from "../Shared/Cookie";
=======
/* import Components */
import { UserFormWrap, UserPageBox, UserTitle, LoginBtnWrap, StateHeader, StateHeaderText } from './Login';
import { Button } from '../elem/Button';
>>>>>>> 3b773bf64304b721a2e0f74457cd080d2d99488a

const Update = () => {
  const navigate = useNavigate();
  const params = useParams();
  const text_ref = useRef(null);
  const distpatch = useDispatch();
  const postId = params.postId;
  console.log(postId)
  const updatePostHandler = () => {
  distpatch(updatePostDB({
    postId,
    token: getCookie('token'),
    text: text_ref.current?.value,}))
  }


  return (
    <>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <span>Update</span>
      <input placeholder="00자 이내로 작성해주세요"></input>
      <button onClick={()=>(updatePostHandler)}>UPDATE</button>
      <button onClick={()=>(navigate(-1))}>CANCEL</button>
    </>
  )
}

export default Update;