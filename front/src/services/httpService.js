const axios = require('axios');

const apiEndpoint = "http://localhost:4021/";

function get(url){
  return axios.get(apiEndpoint + url);
}