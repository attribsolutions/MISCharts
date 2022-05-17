import axios from "axios"
import accessToken from "./jwt-token-access/accessToken"

//pass new generated access token here
const token = accessToken

//apply base url for axios0
const API_URL = "http://web.chitalebandhu.in:8080"



const axiosApi = axios.create({
  baseURL: API_URL,
  method:'get',
    headers: {"Access-Control-Allow-Origin": "*" }

})
axiosApi.defaults.headers.common["Authorization"] = token

axiosApi.interceptors.response.use(
  response => response,
  error => Promise.reject(error)
)

export async function get(url) {
  axiosApi.get(url,)
    .then(response => response.data)
}


export async function getWithUrlData(url) {
  console.log("url",url)
  var config = {
    method: 'get',
   
    url: `http://web.chitalebandhu.in:8080/${url}`,
    headers: { "Access-Control-Allow-Origin": "*" }
};
axios(config)
    .then(function (response) {
      return (response.data)
        // dispatch(GetPOSSellDataSuccess(response.data.data))
        // console.log('POS response', response.data);
    })
    .catch(function (error) {
        console.log('POS Error', error);
        // return (error)
    });
}

export async function post(url, data, config = {}) {
  return axiosApi
    .post(url,data,{
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",}
    })
    .then(response => response.data)
}


export async function put(url, data, config = {}) {
  return axiosApi
    .put(url, data, {  headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",}
  })
    .then(response => response.data)
}

export async function del(url, config = {}) {
  return await axiosApi
    .delete(url, { ...config })
    .then(response => response.data)
}


  