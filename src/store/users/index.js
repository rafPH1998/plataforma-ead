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

    auth ({dispatch}, params) {
      return AuthService.auth(params)
                        .then(() => dispatch('getMe'))
    },

    getMe ({commit}) {
      AuthService.getMe()
                  .then((response) => {
                    commit('SET_USER', response.data)
                  })
    },

    forgetPassword (_, email) {
      return AuthService.forgetPassword(email)
    },
    
    logout ({commit}) {
      return AuthService.logout()
                        .then((response) => {
                          if (response == 'OK') {
                            commit('LOGOUT')
                          }
                        })
    }

  },
}
