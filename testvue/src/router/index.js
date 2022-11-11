import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

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
    component: () => import('../views/BoardWrite.vue')
  },
  {
    path: '/boardedit',
    name: 'BoardEdit',
    component: () => import('../views/BoardEdit.vue')
  },
  {
    path: '/score',
    name: 'Score',
    component: () => import('../views/ScoreView.vue')
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

export default router;
