import axios from 'axios';

export const getTokenList = () => {
  return axios({
    method: 'GET',
    url: '/erc20',
  });
};
