import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Signup from '../views/Signup.vue';
import Login from '../views/Login.vue';
import Logout from '../views/Logout.vue';
import PlacesIndex from '../views/PlacesIndex.vue';
import PlacesShow from '../views/PlacesShow.vue';
import PlacesNew from "../views/PlacesNew.vue";
import PlacesEdit from '../views/PlacesEdit.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/places',
    name: "places-index",
    component: PlacesIndex,
  },
  {
    path: '/places/:id',
    name: "places-show",
    component: PlacesShow,
  },
  {
    path: '/places/:id',
    name: "places-new",
    component: PlacesNew,
  },
  {
    path: '/places/:id/edit',
    name: "places-edit",
    component: PlacesEdit,
  },
  {
    path: '/signup',
    name: "signup",
    component: Signup
  },
  {
    path: "/login",
    name: 'login',
    component: Login
  },
  {
    path: "/logout",
    name: "logout",
    component: Logout
  }

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
