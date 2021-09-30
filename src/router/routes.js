const routers = [
    {
        path:'/',
        name: 'home',
        component:()=>import('../view/home/home'),
        meta:{
            title:''
        }
    },
    {
        path:'/home',
        name: 'home',
        component:()=>import('../view/home/home'),
    },
    {
        path:'/reward',
        name: 'reward',
        component:()=>import('../view/reward/index'),
    },
    {
        path:'/actityend',
        name: 'actityend',
        component:()=>import('../view/actity-end/index'),
    }
];
export default routers
