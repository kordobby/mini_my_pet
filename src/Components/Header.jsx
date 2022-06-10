/* 비로그인 상태에서 보여지는 Header */
/* Router */
import { Link } from 'react-router-dom';

/* Stlye */
import styled from 'styled-components';

const Header = () => {

  return (
    <>
      <HeaderWrap>
        <LogoWrap>
          <span>LOGO</span>
        </LogoWrap>
        <LoginWrap>
          <Link to = '/login'>
            <HeaderBtn>LOGIN</HeaderBtn>
          </Link>
          <Link to = '/signup'>
            <HeaderBtn style = {{ marginRight : "15px", marginLeft : "15px" }}>SIGNUP</HeaderBtn>
          </Link>
        </LoginWrap>
      </HeaderWrap>
    </>
  );
}

export const HeaderWrap = styled.div`
  height : 80px;
  width : 100%;

  display : flex;
  justify-content: space-between;
  align-items: flex-end;
  box-sizing: border-box;

  padding : 15px;
  position : fixed;
  top : 0;
  background-color: salmon;
`;

export const LogoWrap = styled.div`
  width : 70%;
`;

export const LoginWrap = styled.div`
  width : 30%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const HeaderBtn = styled.span`
  font-size: 14px;
`;

export default Header;