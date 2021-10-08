const routers = [
    {
        path:'/',
        name: 'home',
        component: () =>
        import(
            /* webpackChunkName: "home" */ '../view/home/home'
        ),
        meta:{
            title:''
        }
    },
    {
        path:'/home',
        name: 'home',
        component: () =>
        import(
            /* webpackChunkName: "home" */ '../view/home/home'
        ),
    },
    {
        path:'/reward',
        name: 'reward',
        component: () =>
        import(
            /* webpackChunkName: "reward" */ '../view/reward/index'
        ),
    },
    {
        path:'/actityend',
        name: 'actityend',
        component: () =>
        import(
            /* webpackChunkName: "actityend" */ '../view/actity-end/index'
        ),
    }
];
export default routers
