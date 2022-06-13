//kakaoLogin: (code) => api.get(`/api/kakao/callback?code=${code}`),

// 카카오 리다이렉트될 화면
import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { kakaoLoginDB } from './redux/modules/userReducer';
import { useNavigate } from 'react-router-dom';

const KakaoRedirect = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const user = useSelector((state) => state.user.user);


  // 인가코드
  let code = new URL(window.location.href).searchParams.get('code');
  const loginState = useSelector((state) => state.userReducer);

  React.useEffect( () => {
    dispatch(kakaoLoginDB(code));
    if (loginState.login) {
       navigate('/')
    }
  }, []);

  return (
    <>
      <LoadingWrap>
        <span>Loainasdf</span>
      </LoadingWrap>
    </>
  );
};

const LoadingWrap = styled.div`
  position: fixed;
  top: calc(50% - 5vw);
  left: calc(50% - 5vw);
`;

export default KakaoRedirect;