import router from '@/router';
import getActityInfo from '@config/getActityInfo.js'
import moment from 'moment';
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

function getHttp(info, next){
  getActityInfo.forEach(item=>{
    if(item[info]){
      let startDate = moment(item[info].startTime,'YYYY-MM-DD HH:mm:ss');
      let endDate = moment(item[info].endTime,'YYYY-MM-DD HH:mm:ss');
      let nowDate = moment(new Date(),'YYYY-MM-DD HH:mm:ss');
      if(nowDate.isAfter(startDate)){
        ///活动已开始
        if(nowDate.isAfter(endDate)){
          ////活动已结束
          next('/actityend');
        }else{
          /////活动进行中
          next();
        }
      }else{
        ////活动尚未开始
        next('/actityend');
      }
    }
  })
  next();
}

router.beforeEach((to, from, next) => {
  ////判断活动是否过期
  const rex = /.*(\/promotion\/)/
  if (rex.test(to.path)) {
    const urlArr = to.path.split('/');
    console.log(urlArr);
    console.log(getActityInfo);
  //   if (process.env.NODE_ENV == 'development') {
      // next()
  //   } else {
      getHttp(urlArr[2], next)
  //   }
  } else {
    next()
  }
//   next()
})

export default router
