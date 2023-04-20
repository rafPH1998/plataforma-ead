import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/home/HomeView.vue';
import MySupports from '@/views/supports/MySupports.vue';
import ModulesAndLessons from '@/views/modules/ModulesAndLessons.vue';
import AuthView from '@/views/auth/AuthView.vue';
import ForgetPasswordView from '@/views/auth/ForgetPasswordView.vue';

const routes = [
  {
    path: '/',
    name: 'auth',
    component: AuthView
  },
  {
    path: '/esqueci-senha',
    name: 'forgot.password',
    component: ForgetPasswordView
  },
  {
    path: '/campus',
    component: () => import('@/layouts/DefaultTemplate'),
    children: [
      {
        path: '',
        name: 'campus.home',
        component: HomeView
      },
      {
        path: 'minhas-duvidas',
        name: 'campus.my.supports',
        component: MySupports
      },
      {
        path: 'modulos',
        name: 'campus.modules',
        component: ModulesAndLessons,
      },
    ]
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
