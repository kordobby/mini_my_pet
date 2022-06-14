const REST_API_KEY = "fdb55d615f77f20d4941bfbe6b9ea088";
const REDIRECT_URI =  "http://localhost:3000/oauth/kakao/callback";


export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
