import { ethers } from 'ethers';
import { abi, bytecode } from '@/const/byteCode';
// import web3 from "web3";

export const getProvider = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  await provider.send('eth_requestAccounts', []);
  return provider;
};

export const useEthProvider = () => {
  return new ethers.providers.Web3Provider(window.ethereum);
};

export const useContract = async (address: string, abi: string) => {
  const provider = await useEthProvider();
  const signer = provider.getSigner();
  return new ethers.Contract(address, abi, signer);
};

export const setStoreValue = async (value: string) => {
  const provider = await getProvider();
  const signer = provider.getSigner();
  const store = await new ethers.Contract(
    '0x0275319657B2b504A7E15F053E0C6E17DF1dC68f',
    '[{"inputs":[],"name":"retrieve","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"num","type":"uint256"}],"name":"store","outputs":[],"stateMutability":"nonpayable","type":"function"}]',
    signer
  );
  store.store(value);
};

export const getStoreValue = async () => {
  const provider = await getProvider();
  const store = await new ethers.Contract(
    '0x0275319657B2b504A7E15F053E0C6E17DF1dC68f',
    '[{"inputs":[],"name":"retrieve","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"num","type":"uint256"}],"name":"store","outputs":[],"stateMutability":"nonpayable","type":"function"}]',
    provider.getSigner()
  );
  return (await store.retrieve()).toString();
};

export const getStorage = async () => {
  const provider = await getProvider();
  const store = await new ethers.Contract(
    '0x87B001cD4B0B2f593E21752bFf94d3D68166b868',
    `[
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "",
						"type": "address"
					}
				],
				"name": "obje",
				"outputs": [
					{
						"internalType": "uint256",
						"name": "",
						"type": "uint256"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "key",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "count",
						"type": "uint256"
					}
				],
				"name": "storeObje",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			}
		]`,
    provider.getSigner()
  );
  return store;
};

export interface IParams {
  totalSupply: string;
  name: string;
  symbol: string;
  precision: string;
}

export const deployERC20Contract = async ({
  totalSupply,
  name,
  symbol,
}: IParams) => {
  const provider = await getProvider();
  const signer = provider.getSigner();
  const factory = new ethers.ContractFactory(abi, bytecode, signer);
  const contract = await factory.deploy(totalSupply, name, symbol);
  await contract.deployed();
  return contract;
};

// window.addEventListener('unhandledrejection', (err) => {
//   console.log(err);
// });

export const emitMethod = async (method: string, params?: any) => {
  const provider = await getProvider();
  const signer = provider.getSigner();
  const contract = await new ethers.Contract(
    '0x4bcd48C41074A5bc4C90086AE8eA82FD29a3475B',
    abi,
    signer
  );
  return contract[method](...params);
};
