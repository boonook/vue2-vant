export default [
  {
    path: '/promotion/vr/home',
    name:'vrhome',
    component: () =>
      import(
        /* webpackChunkName: "vr" */ './pages/home/index.vue'
      ),
    meta: { title: 'vr展示' },
  },
]
