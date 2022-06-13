/* 디테일 page => 포스트 클릭시 연결되는 상세페이지 */

const DetailComment = ( ) => {
/*
  const [ comments, setComments] = useState('');

  const token = getCookie('token');
  const dispatch = useDispatch();
  const CommentList = useSelector((state) => state.commentReducer.list);
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
      username : username,
      nickname : nickname
    }))
  }
*/

  return (
    <>
      {/* 
            <CommentWrap>
              <ComTitle>
                Write Comments!
              </ComTitle>
              <CommentInput
                onChange = {(event) => { setId(event.target.value); }}
                placeholder="댓글을 작성해주세요!"/>
              <Button>POST</Button>
            </CommentWrap>


// RESPONSE : commentId, username, nickname, comment, modifiedAt
            // 댓글 컴포넌트 생성 함수, props 로 넘겨서 내용달리게끔 작성
            {  
              CommentList.map((value, index) => {
                return <Comment
                  key = {value.commentId}
                  text = {value.username}
                  nickname = {value.nickname}
                  comment = {value.comment}
                  modifiedAt = {value.modifiedAt} />
              })}
 */}
    </> 
  )
}

export default DetailComment;