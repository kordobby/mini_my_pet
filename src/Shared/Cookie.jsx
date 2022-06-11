import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const setCookie = (name, value, option) => {
  return cookies.set(name, value, { ...option });
}

export const getCookie = (name) => {
  return cookies.get(name);
}

export const removeCookie = (name) => {
  return cookies.remove(name);
}

//export function logout() {
//   console.log('localStorage set logout!');
//   window.localStorage.setItem('logout', Date.now());
//   cookies.remove('refresh_token');
// }