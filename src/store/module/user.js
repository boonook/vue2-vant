import { setToken, getToken,setUserInfo,_getUserInfo } from '../../utils/util'
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
  }
}
