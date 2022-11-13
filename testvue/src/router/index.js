import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import store from '@/store';

/*const Authentication = () => (to, from, next) => {
  const isLogin = store.getters['loginStore/isLogin'];
  if(!isLogin){
    next('/login?returnUrl='+to.fullPath);
  } else {
    next();
  }
};*/

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/board',
    name: 'Board',
    component: () => import('../views/Board.vue'),
    children: [
      {
        path: '/',
        name: 'BoardList',
        component: () => import('../views/BoardList.vue')
      },
      {
        path: '/boardview',
        name: 'BoardView',
        component: () => import('../views/BoardView.vue')
      },
      {
        path: '/boardwrite',
        name: 'BoardWrite',
        component: () => import('../views/BoardWrite.vue'),
        meta: { requireLogin: true }
      },
      {
        path: '/boardedit',
        name: 'BoardEdit',
        component: () => import('../views/BoardEdit.vue'),
        meta: { requireLogin: true }
      }
    ]
  },
  {
    path: '/score',
    name: 'Score',
    component: () => import('../views/ScoreView.vue'),
    meta: { requireLogin: true }
    //beforeEnter: Authentication()
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next)=>{
  console.log(to);
  if (to.matched.some(record => record.meta.requireLogin)) {
  //if (to.meta.requireLogin) {
    const isLogin = store.getters['loginStore/isLogin'];
    if(!isLogin) {
      var result = confirm("로그인되어야 사용 가능합니다.\n로그인 하시겠습니까?");//확인창 띄움
      if (result) {
        next({name: 'Login', query: { returnUrl: to.fullPath }});
      }
      //alert("로그인되어야 사용 가능합니다.");//로그인 메세지를 띄움, 이동은 안함
      //next({name: 'Login', query: { returnUrl: to.fullPath }});//로그인 뷰로 이동시킴
      //next('/login?returnUrl='+to.fullPath);
    } else {
      next();
    }
  } else {
    next();
  }
});

//전역으로 처리하는 방법
/*router.beforeEach((to, from, next)=>{
  if (to.path == "/score") {
    const isLogin = store.getters['loginStore/isLogin'];
    if(!isLogin){
      next('/login?returnUrl='+to.fullPath);
    } else {
      next();
    }
  } else {
    next();
  }
});*/

export default router;
