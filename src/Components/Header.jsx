/* 비로그인 상태에서 보여지는 Header */
/* Router */
import { Link } from 'react-router-dom';

/* Stlye */
import styled from 'styled-components';

const Header = () => {

  return (
    <>
      <HeaderWrap>
        <Link to = '/'>
          <LogoWrap>
            <span style = {{
              color : 'var(--red)',
              fontFamily : 'dokdo',
              fontSize : '50px',
              position : 'absolute',
              bottom : '8px'
            }}>GundiPang</span>
            <span style = {{
              color : 'var(--red)',
              fontFamily : 'dokdo',
              fontSize : '20px',
              position : 'absolute',
              bottom : '-4px'
            }}>MY PET GALLERY</span>
          </LogoWrap>
        </Link>
        <LoginWrap>
          <Link to = '/login'>
            <HeaderBtn style = {{ marginRight : "15px"}}>LOGIN</HeaderBtn>
          </Link>
          <Link to = '/signup'>
            <HeaderBtn style = {{ marginRight : "15px" }}>SIGNUP</HeaderBtn>
          </Link>
        </LoginWrap>
      </HeaderWrap>
    </>
  );
}

export const HeaderWrap = styled.div`
  height : 120px;
  width : 100%;

  display : flex;
  justify-content: space-between;
  align-items: flex-end;
  box-sizing: border-box;

  padding : 15px;
  position : fixed;
  top : 0;
  background-color: var(--blue);
  z-index: 5;
`;

export const LogoWrap = styled.div`
  width : 240px;
  display : flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position : relative;
`;

export const LoginWrap = styled.div`
  width : 30%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  @media screen and (max-width : 800px) {
    flex-direction: column;
  }
`;

export const HeaderBtn = styled.span`
  font-size: 14px;
  font-weight: 600;
  color : white;
  @media screen and (max-width : 800px) {
    margin-bottom: 5px;
  }
`;

export default Header;