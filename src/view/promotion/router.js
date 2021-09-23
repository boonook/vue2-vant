import router from '@/router'
let routes= [
  {
    path: '/promotion/ticketlistjegotrip',
    component: () =>
      import(
        /* webpackChunkName: "promotion/ticket-list-jegotrip" */ './pages/ticket-list-jegotrip/index.vue'
      ),
  },
]

const partnerFiles = require.context('./pages', true, /routes.js$/);
partnerFiles.keys().forEach((key) => {
  // debugger
  routes = [...routes, ...partnerFiles(key).default];
  console.log(router);
  router.addRoutes(routes);
})

// router.beforeEach((to, from, next) => {
  ////判断活动是否过期
  // const rex = /.*(\/promotion\/)/
  // if (rex.test(to.path)) {
  //   const urlArr = to.path.split('/')
  //   if (process.env.NODE_ENV == 'development') {
  //     next()
  //   } else {
  //     getHttp(urlArr[2], next)
  //   }
  // } else {
  //   next()
  // }
//   next()
// })

export default router
