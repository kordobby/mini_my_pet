/* 로그인 상태에서 보여지는 Header */
/* Router */
import { Link } from 'react-router-dom';

/* import Components */
import { HeaderWrap, LogoWrap, LoginWrap, HeaderBtn } from './Header';
/* Stlye */
import styled from 'styled-components';
import { getCookie } from '../Shared/Cookie';
const HeaderIsLogin = ( {logoutHandler, userNick, userId } ) => {

  const accessToken = getCookie('token');

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
          <HeaderBtn>{userNick}님 어서오세요!</HeaderBtn>
          <Link to = '/'>
            <HeaderBtn onClick = {(accessToken) =>logoutHandler(accessToken)} style = {{ marginRight : "15px", marginLeft : "15px" }}>Logout</HeaderBtn>
          </Link>
        </LoginWrap>
      </HeaderWrap>
    </>
  );
}

export default HeaderIsLogin;