import axios from 'axios';

export const getAccountList = () => {
  return axios({
    method: 'GET',
    url: '/account/list',
  });
};
