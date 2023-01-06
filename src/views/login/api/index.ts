import axios from 'axios';

export interface IUser {
  username: string;
  password: string;
}

export const login = (data: IUser) => {
  return axios({
    method: 'POST',
    url: '/auth/login',
    data,
  });
};

export const regist = (data: IUser) => {
  return axios({
    method: 'POST',
    url: '/users/regist',
    data,
  });
};
