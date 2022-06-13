import { KAKAO_AUTH_URL } from './Kakao';

function OAuth() {
  //let 변수명 = new URL(window.location.href).searchParams.get('code')
  console.log(KAKAO_AUTH_URL);

  return (
    <a href={KAKAO_AUTH_URL}>
      <span>카카오계정 로그인</span>
    </a>
  );
}

export default OAuth;