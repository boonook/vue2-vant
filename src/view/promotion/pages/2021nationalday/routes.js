export default [
  {
    path: '/promotion/2021nationalday/home',
    name:'2021nationaldayhome',
    component: () =>
      import(
        /* webpackChunkName: "2021nationalday" */ './pages/home/index.vue'
      ),
    meta: { title: '国庆惠玩' },
  },
  {
    path: '/promotion/2021nationalday/rules',
    name:'2021nationaldayrules',
    component: () =>
      import(
        /* webpackChunkName: "2021nationalday" */ './pages/rules/index.vue'
      ),
    meta: { title: '活动规则' },
  },
  {
    path: '/promotion/2021nationalday/result',
    name:'2021nationaldayresult',
    component: () =>
      import(
        /* webpackChunkName: "2021nationalday" */ './pages/result/index.vue'
      ),
    meta: { title: '购买成功' },
  },
  {
    path: '/promotion/2021nationalday/records',
    name:'2021nationaldayrecords',
    component: () =>
      import(
        /* webpackChunkName: "2021nationalday" */ './pages/records/index.vue'
      ),
    meta: { title: '已购券包' },
  },
]
