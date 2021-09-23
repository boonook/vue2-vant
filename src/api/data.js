import axios from '../axios/axios_request'
export const homeData = (params) => {
  return axios.request({
    url:'/api/prizeuser/listAll',
    method:'post',
    data:'',
    headers: {
      'Content-Type': 'application/json',
    },
  },true)
};

export const choujiangcishu = (params) => {
  return axios.request({
    url:'/api/prizeuser/prizeInfo',
    method:'post',
    data:'',
    headers: {
      'Content-Type': 'application/json',
    },
  },true)
};

export const choujiang = (params) => {
  return axios.request({
    url:'/api/prizeuser/prize',
    method:'post',
    data:'',
    headers: {
      'Content-Type': 'application/json',
    },
  },true)
};

export const logs = (params) => {
  return axios.request({
    url:'/api/prizeuser/list',
    method:'post',
    data:JSON.stringify(params),
    headers: {
      'Content-Type': 'application/json',
    },
  },true)
};

export const searchUser = (params) => {
  return axios.request({
    url:'/api/user/nameImtoken?loginName='+params.loginName,
    method:'get',
  },true)
};

export const userInfo = () => {
  return axios.request({
    url:'/api/user/info',
    method:'get',
  },true)
};

