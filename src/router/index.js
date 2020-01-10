import Vue from 'vue'
import VueRouter from 'vue-router'
import Welcome from '../views/Welcome';
import Patients  from "../views/Patients";
import Doctors from "../views/Doctors";
import Diseases from "../views/Diseases";
import Newpatient from "../views/Newpatient";
Vue.use(VueRouter)

const routes = [
  {
   path:"/",
    component: Welcome
  },
  {
    path:"/patients",
    component: Patients
  },
  {
    path:"/doctors",
    component:Doctors
  },
  {
    path:"/diseases",
    component:Diseases
  },
  {
    path:"/patient/new",
    component:Newpatient
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
