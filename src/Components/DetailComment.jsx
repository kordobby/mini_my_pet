/* 디테일 page => 포스트 클릭시 연결되는 상세페이지 */
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadCommentDB, addCommentDB } from "../redux/modules/commentReducer";
import { getCookie } from "../Shared/Cookie";
import { useState } from "react";

const DetailComment = ( ) => {

  const [ comments, setComments] = useState('');

  const token = getCookie('token');
  const dispatch = useDispatch();


//  * 여기서 optional chaining????
  const CommentList = useSelector((state) => state.commentReducer?.list);
// => CommentList : commentId, username, nickname, comment, modifiedAt


  // DB 에 저장된 Comments list 로드하기
  useEffect(() => {
    dispatch(loadCommentDB(token));
  }, [dispatch]);

  // 댓글 작성하기 
  const commentHandler = () => {
    dispatch(addCommentDB({
      token : token,
      comment : comments,
      username : 'username',
      nickname : 'nickname'
    }))
  }

  return (
          <>
            <div>
              <span>
                Write Comments!
              </span>
              <input
                onChange = {(event) => { setComments(event.target.value); }}
                placeholder="댓글을 작성해주세요!"/>
              <button onClick = {commentHandler}>POST</button>
            </div>

{/*
          *  RESPONSE : commentId, username, nickname, comment, modifiedAt 
            * 댓글 컴포넌트 생성 함수, props 로 넘겨서 내용달리게끔 작성
            * 여기서 예외처리 해주는 코드를 작성해볼까..
*/}

            { !CommentList.loading ? (
              CommentList.map((value, index) => {
                return <div
                  key = {value.commentId}
                  text = {value.username}
                  nickname = {value.nickname}
                  comment = {value.comment}
                  modifiedAt = {value.modifiedAt} />
              })) : (<></>)}
          </> 
  )
}

export default DetailComment;