/* 로그인 상태에서 보여지는 Header */
/* Router */
import { Link } from 'react-router-dom';

/* import Components */
import { HeaderWrap, LogoWrap, LoginWrap, HeaderBtn } from './Header';
/* Stlye */
import styled from 'styled-components';

const HeaderIsLogin = () => {



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

export default HeaderIsLogin;