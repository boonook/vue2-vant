import router from '@/router';
/**********
 * 业务路由
 ***********/
// 登录
import '@/view/login/router'
// 活动
import '@/view/promotion/router'
import PageNotFound from '@/view/error/404.vue';
// 404页面要放在最后一个加载
router.addRoutes([
  {
    path: '*',
    component: PageNotFound
  },
]);

export default router;
