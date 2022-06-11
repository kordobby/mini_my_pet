/* 디테일 page => 포스트 클릭시 연결되는 상세페이지 */
import { MainJumbotron } from "../Components/Main";
import { useSelector } from "react-redux";

const Detail = () => {
const postList = useSelector(state=>state.postReducer.list)

  return (
    <>
      <span>Detail</span>
      

    </>
  )
}

export default Detail;