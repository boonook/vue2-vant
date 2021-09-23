import router from '@/router';
import login from './home/index.vue'
const routes = [
    {
      path: '/login',
      name: 'login',
      component:login,
      meta: { title: '登录' },
    },
  ]
  
  routes.forEach((item) => {
    router.addRoute(item)
  })
  
  export default router
  