const REST_API_KEY = "fdb55d615f77f20d4941bfbe6b9ea088";
const REDIRECT_URI =  "http://62442.s3-website.ap-northeast-2.amazonaws.com/oauth/kakao/callback";


export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
