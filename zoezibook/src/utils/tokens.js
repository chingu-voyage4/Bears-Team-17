import { AUTH_TOKEN } from '../config/constants';
export const saveUserData = (token)=> {
  localStorage.setItem(AUTH_TOKEN, token)
};

export const getUserData = () => {
  return localStorage.getItem(AUTH_TOKEN);
}
