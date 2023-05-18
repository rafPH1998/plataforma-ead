import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/home/HomeView.vue';
import MySupports from '@/views/supports/MySupports.vue';
import ModulesAndLessons from '@/views/modules/ModulesAndLessons.vue';
import AuthView from '@/views/auth/AuthView.vue';
import ForgetPasswordView from '@/views/auth/ForgetPasswordView.vue';
import ResetPasswordView from '@/views/auth/ResetPasswordView.vue';

import store from "@/store"
import { TOKEN_NAME } from "@/configs/api"

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
    path: '/reset/:token',
    name: 'reset.password',
    component: ResetPasswordView,
    props: true
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

router.beforeEach(async (to, _, next) => {
  const loggedIn = store.state.users.loggedIn

  if (to.name != 'reset.password' && !loggedIn) {

    const token = await localStorage.getItem(TOKEN_NAME)

    if (!token && to.name != 'auth' && to.name != 'forgot.password') {
      return router.push({name: 'auth'})
    }

    await store.dispatch('getMe')
                .catch(() => {
                  if (to.name != 'auth') return router.push({name: 'auth'})
                })
  }

  next()
})

export default router
