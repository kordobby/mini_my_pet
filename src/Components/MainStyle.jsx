import styled from 'styled-components';
import { BridgeTitle } from '../Pages/Test';
import { ButtonPost } from '../elem/Button';
import CardBox from './CardBox'; 

const MainStyle = () => {

  return (
    <MainWrap>
      <MainHeader>
      <BridgeTitle
          style = {{
            color : 'white',
            fontSize : '40px',
            marginBottom : '15px'
          }}>
            GUNDIPANG GALLERY
      </BridgeTitle>
      <ButtonPost> + Post!</ButtonPost>
      </MainHeader>
      <GridWrap>
        <CardBox></CardBox>
        <CardBox></CardBox>
        <CardBox></CardBox>
        <CardBox></CardBox>
      </GridWrap>
    </MainWrap>
  )
}

const MainWrap = styled.div`
  width : 100%;
  height : 100vh;
  background-color: var(--post);
`;

const MainHeader = styled.div`
  width : 100%;
  height: 100px;

  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 28px;
`
const GridWrap = styled.div`
  width : 100%;
  display : grid;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: repeat(1, 500px);
  place-items: center;

  @media screen and (max-width : 1300px) {
    grid-template-columns: repeat(3, 33%);
  }
  @media screen and (max-width : 1000px) {
    grid-template-columns: repeat(2, 50%);
  }
  @media screen and (max-width : 600px) {
    grid-template-columns: repeat(1, 100%);
  }
`;
export default MainStyle;