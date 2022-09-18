import axios from 'axios';
import { ILoginCredsModel } from './types';

export const logIn = async (loginCreds: ILoginCredsModel) => {
  const res = await axios.post('/login', loginCreds);
  return res;
};
