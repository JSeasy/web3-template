import axios from 'axios';

export const getUserList = () => {
  return axios({
    method: 'GET',
    url: '/users',
  });
};
