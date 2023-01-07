import axios from 'axios';

export const getUserList = () => {
  return axios({
    method: 'GET',
    url: '/users',
  });
};

export const bindAccount = (data: IAccount) => {
  return axios({
    method: 'POST',
    url: '/account/bind',
    data,
  });
};
