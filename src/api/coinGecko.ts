import axios from 'axios';
import dotenv from 'dotenv';

export default axios.create({
  baseURL: 'https://api.coingecko.com/api/v3',
  headers: {
    'x-cg-demo-api-key': `${process.env.REACT_APP_COIN_GECKO_API_KEY}`
  }
});
