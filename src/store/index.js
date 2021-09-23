import Vue from 'vue'
import Vuex from 'vuex'

import user from './module/user'

Vue.use(Vuex)


/////扫描目录下的所有store文件将其注入到modules

export default new Vuex.Store({
    state: {
        //
    },
    mutations: {
        //
    },
    actions: {
        //
    },
    modules: {
        user,
    }
})
