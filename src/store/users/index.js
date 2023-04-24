import AuthService from "@/services/AuthService"

export default {
  state: {
    user: {
        name: '',
        email: '',
        password: ''
    },
    isLogged: false,
  },

  getters: {

  },

  mutations: {
    SET_USER (state, user) {
        state.user = user
        state.isLogged = true
    },
    LOGOUT (state) {
        state.user = {
            name: '',
            email: '',
        },

        state.isLogged = false
    },
  },

  actions: {
    auth({state}, params) {
      state.isLogged
      return AuthService.auth(params)
    }
  },
}
