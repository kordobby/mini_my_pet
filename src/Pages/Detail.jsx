/* 디테일 page => 포스트 클릭시 연결되는 상세페이지 */
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { delPostDB } from "../redux/modules/postReducer";

const Detail = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const postList = useSelector(state=>state.postReducer.list)
  const userData = useSelector(state=>state.userReducer)
  console.log(postList)
  const postId = params.postId
  const postData = postList.find(v=>v.postId === postId)

  const delPostHandler = () => {
    dispatch(delPostDB({postId})) //token 전달 필요 
  }
  return (
    <>
      <span>Detail</span>
      <div>{userData.nickname}</div>
      <div>{postData.postTime}</div>
      <div>{postData.text}</div>
      <button onClick={delPostHandler}>Delete this</button>
    </>
  )
}

export default Detail;