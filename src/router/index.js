import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);
import routes from './routes'


const router = new Router({
    routes,
    mode: 'hash'
});
///
router.beforeEach((to,from,next)=>{
    if(to.meta) document.title = to.meta.title || 'mtm';
    next()
});

export default router
