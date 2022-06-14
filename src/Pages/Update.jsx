/* 수정 page */
import { useRef } from "react";
import { useDispatch } from "react-redux"
import { useNavigate, useParams } from "react-router-dom";
import { updatePostDB } from "../redux/modules/postReducer";
import { getCookie } from "../Shared/Cookie";

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