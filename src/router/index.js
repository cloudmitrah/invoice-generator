import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import create from '../views/createProduct.vue'
import Edit from '../views/EditProduct.vue'
import Details from '../views/DetailsProduct.vue'
import Reports from '../views/ReportProduct.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/details',
    name: 'Details',
    component: Details
  },
  {
    path: '/reports',
    name: 'Reports',
    component: Reports
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/create',
    name: 'create',
    component: create
  },
  {
  name: 'Edit',
  path: '/edit',
  component: Edit,
  props: true,
  meta: {
    // requiresAuth: true
  }
},
]

const router = new VueRouter({
  routes,
  mode: "history"
})

export default router
