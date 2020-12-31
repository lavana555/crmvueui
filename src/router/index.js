import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "@/views/Login";
import Categories from "@/views/Categories";
import Profile from "@/views/Profile";
import Planning from "@/views/Planning";
import History from "@/views/History";
import Record from "@/views/Record";
import DetaliRecord from "@/views/DetaliRecord";
import Register from "@/views/Register";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {layout: 'main'},
    component: ()=>import('@/views/Home.vue')
  },
  {
    path:'/login',
    name:'Login',
    meta:{layout:'empty'},
    component: Login
  },
  {
    path:'/register',
    name:'Register',
    meta:{layout: 'empty'},
    component: Register
  },
  {
    path:'/categories',
    name:'Categories',
    meta:{layout:'main'},
    component: Categories
  },
  {
    path:'/profile',
    name:'Profile',
    meta:{layout: 'main'},
    component: Profile
  },
  {
    path:'/planning',
    name:'Planning',
    meta: {layout: 'main'},
    component: Planning
  },
  {
    path:'/history',
    name:'History',
    meta: {layout: 'main'},
    component: History
  },
  {
    path:'/record',
    name: 'Record',
    meta:{layout: 'main'},
    component: Record
  },
  {
    path:'/detalirecord',
    name:'DetaliRecord',
    meta: {layout: 'main'},
    component: DetaliRecord
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
