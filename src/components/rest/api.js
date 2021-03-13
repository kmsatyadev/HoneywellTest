import axios from 'axios';


const baseUrl = 'https://pokeapi.co/api/v2/';


const get = (params, reqOptions={}, headerOptions={})=> {
  const options = {
    baseURL: baseUrl,
    headers: {
      'Accept': '*',
      'Content-Type': 'application/json',
      // 'Access-Control-Allow-Origin':'*',
      // 'Access-Control-Allow-Headers': 'Authorization',
      // 'X-Requested-With': 'XMLHttpRequest',
      // 'Content-Encoding': '*',
      ...headerOptions
    },
    ...reqOptions
  };

  const clientAxios = axios.create(options);

  return clientAxios.get(baseUrl+params, {})
  .then(response => Promise.resolve(response.data))
  .catch(error => Promise.reject(error));
}

export default {get}