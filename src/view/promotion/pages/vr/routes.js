export default [
  {
    path: '/promotion/vr/home',
    name:'vrhome',
    component: () =>
      import(
        /* webpackChunkName: "2021nationalday" */ './pages/home/index.vue'
      ),
    meta: { title: 'vr展示' },
  },
]
