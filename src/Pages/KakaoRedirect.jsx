
// 카카오 리다이렉트될 화면
import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { kakaoLoginDB } from '../redux/modules/userReducer';
import { useNavigate } from 'react-router-dom';
import { getCookie } from '../Shared/Cookie';
import Loading from '../img/Laoding.png';

const KakaoRedirect = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const user = useSelector((state) => state.user.user);
  const accessToken = getCookie('token');

  // 인가코드
  let code = new URL(window.location.href).searchParams.get('code');
  const loginState = useSelector((state) => state.userReducer);

  React.useEffect( () => {
    dispatch(kakaoLoginDB(code));
    if ( accessToken ) {
       navigate('/')
    }
  }, [accessToken]);

  return (
    <>
      <LoadingWrap>
        <img style = {{ width : '300px', height : '300px', marginTop : '30px'}} src = {Loading} alt = "" />
      </LoadingWrap>
    </>
  );
};

const LoadingWrap = styled.div`
  display : flex;
  justify-content: center;
  align-items: center;
  width : 100%;
  height : 100vh;
`;

export default KakaoRedirect;