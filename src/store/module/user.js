import { setToken, getToken,setUserInfo,_getUserInfo } from '../../utils/util'
import {Toast} from 'vant';
let ws;
export default {
  state: {
    userInfo:JSON.parse(_getUserInfo()),
    token: getToken(),
  },
  mutations: {
    setUserInfo (state,data) {
      state.userInfo = data;
      setUserInfo(JSON.stringify(data))
    },
    setToken (state, token) {
      state.token = token
      setToken(token)
    },
  },
  getters: {

  },
  actions: {
    // 登录
    handleLogin ({ commit}, data) {
      return new Promise((resolve)=>{
        commit('setUserInfo', data.userInfo||{});
        resolve(true)
      })
    },
    handleToken ({ commit}, data) {
      return new Promise((resolve)=>{
        commit('setToken', data.token);
        resolve(true)
      })
    },
    // onWebSocket({ commit}){
    //   ws = new WebSocket("ws://localhost:9001");
    //   ws.onopen = function() {
    //     Toast('连接成功！');
    //     console.log("client：打开连接");
    //     let msg = {type:'test',id:'1453855454',name:'boonook'};
    //     ws.send(msg.name+'-'+msg.id+'已上线');
    //   };
    //   ws.onerror = function(){
    //     Toast('连接失败！');
    //   }
    //   ws.onmessage=function (data) {
    //     console.log('socket收到消息', event);
    //   }
    // },
    // onSendMsg({ commit},data){
    //   ws.send(data);
    // },
    // onMessage({ commit},data){
    //
    // }
  }
}
