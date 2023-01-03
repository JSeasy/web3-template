import axios from 'axios';

export const getTokenList = () => {
  return axios({
    method: 'GET',
    url: '/erc20',
  });
};

export const addToken = (data: IErc20DRow) => {
  return axios({
    method: 'POST',
    url: '/erc20',
    data,
  });
};
