import styled from 'styled-components';
import P1 from '../Public/Images/P1.jpeg';

const CardBox = () => {

  return (
    <PostCards>
      <CardHeader>
        <Icon></Icon>
        <UserHeader>
          <span>user_nickname</span>
        </UserHeader>
      </CardHeader>
      <CardBody>
        <img 
          src = {P1}
          style = {{
            width : '280px',
            height: '280px'
          }}
          alt = ""/>
      </CardBody>
      <CardFooter>
        <span>내 귀여운 아가들</span>
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
`;

const CardHeader = styled.div`
  width : 100%;
  height: 50px;
  box-sizing: border-box;
  padding : 10px;
  
  display: flex;
`
export const Icon = styled.div`
  width : 30px;
  height: 30px;
  border-radius: 15px;
  background-color: var(--yellow);
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