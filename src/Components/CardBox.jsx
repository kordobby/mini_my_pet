import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { keyframes } from 'styled-components';
import Yoon from '../Public/Images/Yoon.jpg';

const CardBox = ({img_url, nickname, postId, username, textData, index}) => {
  const navigate = useNavigate();
  return (
    <PostCards style={{cursor:"pointer"}} onClick={()=>{navigate(`/detail/${postId}`)}}>
      <CardHeader>
        <Icon src = {Yoon}></Icon>
        {/* <img src = {Yoon}></img> */}
        <UserHeader>
          <span>{nickname}</span>
        </UserHeader>
      </CardHeader>
      <CardBody>
        <img
          src = {img_url} 
          style = {{
            width : '280px',
            height: '280px'
          }}
          alt = ""/>
      </CardBody>
      <CardFooter>
        <span>{textData}</span>
      </CardFooter>
    </PostCards>
  )
}

const PostCards = styled.div`
  width : 300px;
  height: 400px;
  background-color: white;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  &:hover {
    transform: scale(1.05);
    transition : transform 0.5s ease .1s;
   }
`;

const CardHeader = styled.div`
  width : 100%;
  height: 50px;
  box-sizing: border-box;
  padding : 10px;
  
  display: flex;
`
export const Icon = styled.img`
  width : 30px;
  height: 30px;
  border-radius: 15px;
`

export const UserHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
`

const CardBody = styled.div`
  display: flex;
  justify-content : center;
`

const CardFooter = styled.div`
  width : 100%;
  padding : 10px;
`

export default CardBox;