/* 디테일 page => 포스트 클릭시 연결되는 상세페이지 */
import { MainJumbotron } from "../Components/Main";


const Detail = () => {
const postList = useSelector(state=>state.postReducer.list)
console.log(postlist);
  return (
    <>
      <span>Detail</span>
      <MainJumbotron>여기는 MainJumbotron 공간입니다.</MainJumbotron>  
      <div>asdfasdfasdf</div>
      <div>asdfasdfasdf</div>
      <div>asdfasdfasdf</div>
      <div>asdfasdfasdf</div>
      <div>asdfasdfasdf</div>

    </>
  )
}

export default Detail;