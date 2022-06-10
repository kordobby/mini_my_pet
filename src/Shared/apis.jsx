import axios from "axios";
import { getCookie } from "./Cookie";

const instance = axios.create({
	baseURL: "damain.i.dont.know" // 요청을 www.aa.com/user로 보낸다면, www.aa.com까지 기록
});

const accessToken = getCookie('token');
instance.defaults.headers.common["Authorization"] = accessToken; 

export default instance;