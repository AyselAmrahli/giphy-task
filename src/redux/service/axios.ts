import axios from 'axios';
import { API_KEY, BASE_URL } from '../../const/constant';

const Axios = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  params: {
    api_key: API_KEY
  }
});

export default Axios; 